import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlaksp4ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlaksp4ow"/>`,
		"fallback": "mynaui:cloud-hail",
	});
}

export default Component;
