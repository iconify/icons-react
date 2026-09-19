import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yidy5ob3f.css';
import '../../css/o/o_u96ibiu.css';
import '../../css/n/nmur6okjy.css';
import '../../css/c/c818x0b4f.css';
import '../../css/f/f43eqhbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yidy5ob3f"/><circle class="o_u96ibiu"/><circle class="nmur6okjy"/><circle class="c818x0b4f"/><circle class="f43eqhbwn"/>`,
		"fallback": "bx:band-aid",
	});
}

export default Component;
