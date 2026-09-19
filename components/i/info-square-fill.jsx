import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtkz3db2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtkz3db2k"/>`,
		"fallback": "bi:info-square-fill",
	});
}

export default Component;
