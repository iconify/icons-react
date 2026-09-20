import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab4azpbnj.css';
import '../../css/q/qw5p-6bvx.css';
import '../../css/m/mlz_qs5ec.css';
import '../../css/p/p7g88_b9s.css';
import '../../css/v/vh1dgbcue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ab4azpbnj"/><path class="qw5p-6bvx"/><path class="mlz_qs5ec"/><circle class="p7g88_b9s"/><circle class="vh1dgbcue"/></g>`,
		"fallback": "lets-icons:basket-alt-3-light",
	});
}

export default Component;
