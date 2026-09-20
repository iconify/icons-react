import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kfnyagb3r.css';
import '../../css/m/mhh30ybth.css';
import '../../css/d/d_6p_3cql.css';
import '../../css/o/oevciebap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="kfnyagb3r"/><rect class="mhh30ybth"/><rect class="d_6p_3cql"/><rect class="oevciebap"/></g>`,
		"fallback": "lets-icons:darhboard-alt",
	});
}

export default Component;
