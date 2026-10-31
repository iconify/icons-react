import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um5f_xfat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um5f_xfat"/>`,
		"fallback": "coolicons:arrow-right-to-line-round",
	});
}

export default Component;
