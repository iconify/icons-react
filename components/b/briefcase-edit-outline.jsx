import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-qwf9jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr-qwf9jd"/>`,
		"fallback": "mdi:briefcase-edit-outline",
	});
}

export default Component;
