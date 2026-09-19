import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd-rz_mmy.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd-rz_mmy"/>`,
		"fallback": "fa:hourglass-half",
	});
}

export default Component;
