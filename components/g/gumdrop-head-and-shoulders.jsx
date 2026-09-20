import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz7p0yhdg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz7p0yhdg"/>`,
		"fallback": "pinhead:gumdrop-head-and-shoulders",
	});
}

export default Component;
