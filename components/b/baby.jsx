import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d37911_pn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d37911_pn"/>`,
		"fallback": "pinhead:baby",
	});
}

export default Component;
