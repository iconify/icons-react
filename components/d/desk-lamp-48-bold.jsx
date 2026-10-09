import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_chr5qqn.css';
import '../../css/b/bxqwznb6j.css';
import '../../css/q/q5_trsb-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_chr5qqn"/><path class="bxqwznb6j"/><path class="q5_trsb-o"/>`,
		"fallback": "energy-icons:desk-lamp-48-bold",
	});
}

export default Component;
