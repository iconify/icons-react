import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_0vdbc1d.css';

const viewBox = {"width":2048,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_0vdbc1d"/>`,
		"fallback": "fa:drivers-license-o",
	});
}

export default Component;
