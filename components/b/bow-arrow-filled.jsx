import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8l8tibar.css';
import '../../css/s/s_xabeb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8l8tibar"/><path class="s_xabeb6d"/>`,
		"fallback": "lucide-extended:bow-arrow-filled",
	});
}

export default Component;
