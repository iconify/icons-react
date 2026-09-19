import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muy8p_6ky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muy8p_6ky"/>`,
		"fallback": "bi:border",
	});
}

export default Component;
