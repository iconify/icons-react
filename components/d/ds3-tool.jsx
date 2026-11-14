import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j15migwcq.css';
import '../../css/h/hwng2kb6y.css';
import '../../css/j/j2qdvjbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j15migwcq"/><path class="hwng2kb6y"/><path class="j2qdvjbwi"/></g>`,
		"fallback": "hugeicons:ds3-tool",
	});
}

export default Component;
