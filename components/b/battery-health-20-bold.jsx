import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8kieuq1v.css';
import '../../css/d/d-w_kffol.css';
import '../../css/x/x-p659jvv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8kieuq1v"/><path class="d-w_kffol"/><path class="x-p659jvv"/>`,
		"fallback": "energy-icons:battery-health-20-bold",
	});
}

export default Component;
