import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/ujarmf0ov.css';
import '../../css/y/ylhpf8tzr.css';
import '../../css/d/d4txopbsl.css';
import '../../css/y/ymjti08eb.css';
import '../../css/a/ahkl9uj7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ujarmf0ov"/><path class="ylhpf8tzr"/><circle class="d4txopbsl"/><circle class="ymjti08eb"/><path class="ahkl9uj7o"/></g>`,
		"fallback": "bitcoin-icons:hat-and-glasses-outline",
	});
}

export default Component;
