import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzo9n2i8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzo9n2i8a"/>`,
		"fallback": "streamline:cake-slice-remix",
	});
}

export default Component;
