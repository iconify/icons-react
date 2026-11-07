import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxppngd4j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxppngd4j"/>`,
		"fallback": "pinhead:eaved-leanto-building-with-fireplace-and-chimney",
	});
}

export default Component;
