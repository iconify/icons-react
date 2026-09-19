import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cb6gygfeh.css';
import '../../css/j/jt685qb_a.css';
import '../../css/u/utjnuocqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cb6gygfeh"/><path clip-rule="evenodd" class="jt685qb_a"/><path class="utjnuocqx"/></g>`,
		"fallback": "iconoir:frame-alt",
	});
}

export default Component;
