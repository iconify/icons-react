import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sws_sk_no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sws_sk_no"/>`,
		"fallback": "heroicons:arrow-up-tray-solid",
	});
}

export default Component;
