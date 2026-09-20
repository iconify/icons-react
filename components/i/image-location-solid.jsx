import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7snm4f3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7snm4f3m"/>`,
		"fallback": "streamline-flex:image-location-solid",
	});
}

export default Component;
