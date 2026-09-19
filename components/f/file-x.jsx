import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbu8ekbba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbu8ekbba"/>`,
		"fallback": "carbon:file-x",
	});
}

export default Component;
