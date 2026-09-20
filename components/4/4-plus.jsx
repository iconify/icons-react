import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyhm07bjh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyhm07bjh"/>`,
		"fallback": "pinhead:4-plus",
	});
}

export default Component;
