import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hknlbeg7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hknlbeg7s"/>`,
		"fallback": "pinhead:arrow-top-left-beside-arrow-top-right-above-arrow-bottom-left-beside-arrow-bottom-right",
	});
}

export default Component;
