import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_t1md8jp.css';
import '../../css/i/ihw0bkbnv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_t1md8jp"/><path class="ihw0bkbnv"/>`,
		"fallback": "material-icon-theme:cpp",
	});
}

export default Component;
