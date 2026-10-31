import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtdee3zsb.css';
import '../../css/a/agz0iqbtx.css';
import '../../css/z/zo82iz4es.css';
import '../../css/v/v93lekbra.css';
import '../../css/q/q_wqe0eay.css';
import '../../css/y/yhrvmqbgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mtdee3zsb"/><circle class="agz0iqbtx"/><circle class="zo82iz4es"/><path class="v93lekbra"/><path class="q_wqe0eay"/><path clip-rule="evenodd" class="yhrvmqbgv"/></g>`,
		"fallback": "streamline-memes:angry-face",
	});
}

export default Component;
