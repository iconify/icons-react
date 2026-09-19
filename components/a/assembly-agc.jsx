import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dux5jwkjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dux5jwkjy"/>`,
		"fallback": "file-icons:assembly-agc",
	});
}

export default Component;
