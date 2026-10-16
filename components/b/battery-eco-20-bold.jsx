import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8kieuq1v.css';
import '../../css/d/d-w_kffol.css';
import '../../css/b/bqjlc4bld.css';
import '../../css/f/fsjo0ab5d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8kieuq1v"/><path class="d-w_kffol"/><path class="bqjlc4bld"/><path class="fsjo0ab5d"/>`,
		"fallback": "energy-icons:battery-eco-20-bold",
	});
}

export default Component;
