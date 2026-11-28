import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l37l5sboh.css';
import '../../css/u/uj_mr6b0o.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l37l5sboh"/><path class="uj_mr6b0o"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:edit-off",
	});
}

export default Component;
