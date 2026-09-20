import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o67gatzzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o67gatzzk"/>`,
		"fallback": "mdi:cowboy",
	});
}

export default Component;
