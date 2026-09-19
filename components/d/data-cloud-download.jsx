import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ri6bb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0ri6bb1g"/>`,
		"fallback": "griddy-icons:data-cloud-download",
	});
}

export default Component;
