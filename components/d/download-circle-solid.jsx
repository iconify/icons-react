import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx0_3vbtz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rx0_3vbtz"/>`,
		"fallback": "streamline:download-circle-solid",
	});
}

export default Component;
