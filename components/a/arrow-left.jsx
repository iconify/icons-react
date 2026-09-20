import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sich1rccl.css';
import '../../css/p/p4luhxbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sich1rccl"/><path class="p4luhxbug"/>`,
		"fallback": "prime:arrow-left",
	});
}

export default Component;
