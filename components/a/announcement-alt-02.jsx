import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wokc7ybal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wokc7ybal"/>`,
		"fallback": "griddy-icons:announcement-alt-02",
	});
}

export default Component;
