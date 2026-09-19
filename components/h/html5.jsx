import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahw-91_je.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahw-91_je"/>`,
		"fallback": "fontisto:html5",
	});
}

export default Component;
