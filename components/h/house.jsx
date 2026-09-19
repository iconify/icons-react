import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txy313exu.css';
import '../../css/t/tvxuj9beq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txy313exu"/><path class="tvxuj9beq"/>`,
		"fallback": "cil:house",
	});
}

export default Component;
