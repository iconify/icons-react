import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ext4fquee.css';
import '../../css/h/hf-vc2b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ext4fquee"/><path class="hf-vc2b6c"/>`,
		"fallback": "boxicons:hospital-filled",
	});
}

export default Component;
