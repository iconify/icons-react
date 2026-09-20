import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6fzm2b7v.css';
import '../../css/l/luua7ozmy.css';
import '../../css/e/ebj8f9bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="t6fzm2b7v"/><rect class="luua7ozmy"/><rect class="ebj8f9bpd"/>`,
		"fallback": "lets-icons:battery-low-duotone",
	});
}

export default Component;
