import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxxk3-bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxxk3-bpz"/>`,
		"fallback": "uil:envelope-share",
	});
}

export default Component;
