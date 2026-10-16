import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqvv3bb7y.css';
import '../../css/t/ti-bis8gw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqvv3bb7y"/><path class="ti-bis8gw"/>`,
		"fallback": "energy-icons:door-20",
	});
}

export default Component;
