import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb2ueejbb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb2ueejbb"/>`,
		"fallback": "fluent-mdl2:d-o-m",
	});
}

export default Component;
