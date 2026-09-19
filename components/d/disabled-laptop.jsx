import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kzx5c9b0m.css';
import '../../css/f/f71geq9qs.css';
import '../../css/c/cg5yr93ex.css';
import '../../css/q/qr74q9btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kzx5c9b0m"/><path class="f71geq9qs"/><circle class="cg5yr93ex"/><path class="qr74q9btr"/></g>`,
		"fallback": "icon-park-solid:disabled-laptop",
	});
}

export default Component;
