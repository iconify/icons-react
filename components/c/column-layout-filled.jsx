import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd1acfboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd1acfboa"/>`,
		"fallback": "tdesign:column-layout-filled",
	});
}

export default Component;
