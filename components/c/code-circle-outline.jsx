import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxcwapovt.css';
import '../../css/c/cn3vjbcnl.css';
import '../../css/c/cpsdjbhjl.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxcwapovt"/><path class="cn3vjbcnl"/><path class="cpsdjbhjl"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:code-circle-outline",
	});
}

export default Component;
