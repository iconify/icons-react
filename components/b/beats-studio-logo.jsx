import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kz3-vn6kb.css';
import '../../css/r/rq_kn7bnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kz3-vn6kb"/><path class="rq_kn7bnn"/></g>`,
		"fallback": "streamline-logos:beats-studio-logo",
	});
}

export default Component;
