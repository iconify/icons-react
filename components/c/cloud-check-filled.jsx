import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4flwc34c.css';
import '../../css/p/pyu-_y9kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4flwc34c"/><path class="pyu-_y9kf"/>`,
		"fallback": "lucide-extended:cloud-check-filled",
	});
}

export default Component;
