import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_j4mhb6r.css';
import '../../css/m/m_f_sobnp.css';
import '../../css/y/yi_zyo09o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_j4mhb6r"/><rect class="m_f_sobnp"/><rect class="yi_zyo09o"/>`,
		"fallback": "boxicons:horizontal-align-right-filled",
	});
}

export default Component;
