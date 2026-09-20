import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypy18_b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypy18_b6a"/>`,
		"fallback": "mdi:checkbox-multiple-marked",
	});
}

export default Component;
