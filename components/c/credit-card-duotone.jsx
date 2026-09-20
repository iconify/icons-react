import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6k6c5bss.css';
import '../../css/s/sa4jv-b7i.css';
import '../../css/q/qq3vuebmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6k6c5bss"/><circle class="sa4jv-b7i"/><path class="qq3vuebmi"/>`,
		"fallback": "lets-icons:credit-card-duotone",
	});
}

export default Component;
