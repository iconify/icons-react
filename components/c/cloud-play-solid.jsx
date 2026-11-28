import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxmklb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxmklb5y"/>`,
		"fallback": "iconaut:cloud-play-solid",
	});
}

export default Component;
