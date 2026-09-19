import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es97rtbpl.css';
import '../../css/m/mhn45ibqb.css';
import '../../css/m/m2897mb0i.css';
import '../../css/z/zk30aempb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es97rtbpl"/><path class="mhn45ibqb"/><circle class="m2897mb0i"/><path class="zk30aempb"/>`,
		"fallback": "fxemoji:handheldvideocamera",
	});
}

export default Component;
