import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aerh952hi.css';
import '../../css/i/ix7f24bxr.css';
import '../../css/z/zrb6xobrg.css';
import '../../css/d/d30lf3bpk.css';
import '../../css/t/t_kg827bk.css';
import '../../css/l/lgaj05f-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="aerh952hi"/><path class="ix7f24bxr"/><path class="zrb6xobrg"/><path class="d30lf3bpk"/><path class="t_kg827bk"/><path class="lgaj05f-w"/></g>`,
		"fallback": "matita:git-pull-request",
	});
}

export default Component;
