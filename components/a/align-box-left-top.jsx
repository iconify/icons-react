import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyo-u17ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyo-u17ow"/>`,
		"fallback": "tabler:align-box-left-top",
	});
}

export default Component;
