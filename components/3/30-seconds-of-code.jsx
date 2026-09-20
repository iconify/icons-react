import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9ntl4oxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9ntl4oxc"/>`,
		"fallback": "thesvg:30-seconds-of-code",
	});
}

export default Component;
