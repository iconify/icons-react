import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6uk2fb8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6uk2fb8d"/>`,
		"fallback": "streamline:creative-commons-solid",
	});
}

export default Component;
