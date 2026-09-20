import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pp1gl6jey.css';
import '../../css/a/a-q3uypat.css';
import '../../css/g/ge9sgs9jn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pp1gl6jey"/><path class="a-q3uypat"/><path class="ge9sgs9jn"/></g>`,
		"fallback": "streamline:dices-entertainment-gaming-dices",
	});
}

export default Component;
