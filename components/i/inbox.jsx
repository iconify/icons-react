import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdzaxn_oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdzaxn_oo"/>`,
		"fallback": "mdi-light:inbox",
	});
}

export default Component;
