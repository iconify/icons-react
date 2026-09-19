import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbz0mkcdt.css';
import '../../css/h/h-3o7y3iu.css';
import '../../css/m/m1otdsbdn.css';
import '../../css/s/so476kb1q.css';
import '../../css/a/a5gz9p9jc.css';
import '../../css/v/vnlzx5chh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbz0mkcdt"/><path class="h-3o7y3iu"/><path class="m1otdsbdn"/><path class="so476kb1q"/><path class="a5gz9p9jc"/><path class="vnlzx5chh"/></g>`,
		"fallback": "glyphs:gifts-duo",
	});
}

export default Component;
