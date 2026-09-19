import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hifub2buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hifub2buo"/>`,
		"fallback": "boxicons:at-filled",
	});
}

export default Component;
