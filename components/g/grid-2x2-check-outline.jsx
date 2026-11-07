import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-hxshjc.css';
import '../../css/e/egi_o9bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln-hxshjc"/><path class="egi_o9bmk"/>`,
		"fallback": "solar:grid-2x2-check-outline",
	});
}

export default Component;
