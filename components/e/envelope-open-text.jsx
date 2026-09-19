import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdl45rbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdl45rbjc"/>`,
		"fallback": "fa-solid:envelope-open-text",
	});
}

export default Component;
