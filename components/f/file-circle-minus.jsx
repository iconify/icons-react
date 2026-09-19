import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjrwn3y5s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjrwn3y5s"/>`,
		"fallback": "fa7-solid:file-circle-minus",
	});
}

export default Component;
