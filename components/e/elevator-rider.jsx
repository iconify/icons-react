import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qazvk2b5g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qazvk2b5g"/>`,
		"fallback": "pinhead:elevator-rider",
	});
}

export default Component;
