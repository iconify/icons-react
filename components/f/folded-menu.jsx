import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yzrhsrj7m.css';
import '../../css/s/s159o8byd.css';
import '../../css/m/mvhbz79_d.css';
import '../../css/f/fupsmlbqj.css';
import '../../css/i/idyw1jwjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yzrhsrj7m"/><path class="s159o8byd"/><path class="mvhbz79_d"/><path class="fupsmlbqj"/><path class="idyw1jwjj"/></g>`,
		"fallback": "matita:folded-menu",
	});
}

export default Component;
