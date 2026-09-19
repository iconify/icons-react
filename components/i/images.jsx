import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_sajbdp.css';
import '../../css/x/xk7ze-bqa.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_sajbdp"/><path class="xk7ze-bqa"/>`,
		"fallback": "icomoon-free:images",
	});
}

export default Component;
