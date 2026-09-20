import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_xunb2ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_xunb2ye"/>`,
		"fallback": "keyline-icons:file-check-sharp",
	});
}

export default Component;
