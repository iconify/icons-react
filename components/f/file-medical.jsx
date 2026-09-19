import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg9qaby-f.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg9qaby-f"/>`,
		"fallback": "fa6-solid:file-medical",
	});
}

export default Component;
