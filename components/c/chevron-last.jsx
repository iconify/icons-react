import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daj2-25di.css';
import '../../css/o/otjao6b_l.css';
import '../../css/h/h8crmjbcu.css';
import '../../css/v/vs2edu79l.css';
import '../../css/q/quso6qb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daj2-25di wm-shadow"/><path class="otjao6b_l wm-k"/><path class="h8crmjbcu wm-k"/><path class="vs2edu79l wm-a"/><path class="quso6qb-x wm-a"/>`,
		"fallback": "withicons-pastel:chevron-last",
	});
}

export default Component;
