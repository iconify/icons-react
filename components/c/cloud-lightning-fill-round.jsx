import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyf3pjg2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyf3pjg2f"/>`,
		"fallback": "coolicons:cloud-lightning-fill-round",
	});
}

export default Component;
