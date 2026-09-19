import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckv68lbrl.css';
import '../../css/r/r_d7t_bew.css';
import '../../css/c/cg7d2pfom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckv68lbrl"/><circle class="r_d7t_bew"/><circle class="cg7d2pfom"/>`,
		"fallback": "bx:bx-ghost",
	});
}

export default Component;
