import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9jkhxbmk.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9jkhxbmk"/>`,
		"fallback": "fontisto:angle-dobule-down",
	});
}

export default Component;
