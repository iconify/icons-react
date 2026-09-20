import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nar1_xb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nar1_xb5f"/>`,
		"fallback": "thesvg-color:battledotnet",
	});
}

export default Component;
