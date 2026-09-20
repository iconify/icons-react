import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd65e6q8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd65e6q8a"/>`,
		"fallback": "mdi:brightness-2",
	});
}

export default Component;
