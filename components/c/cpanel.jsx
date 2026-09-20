import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brmk2qfek.css';

const viewBox = {"width":407.66,"height":240};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brmk2qfek"/>`,
		"fallback": "thesvg-color:cpanel",
	});
}

export default Component;
