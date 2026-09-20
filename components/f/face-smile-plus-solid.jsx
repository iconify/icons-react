import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upyut0o1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upyut0o1j"/>`,
		"fallback": "sidekickicons:face-smile-plus-solid",
	});
}

export default Component;
