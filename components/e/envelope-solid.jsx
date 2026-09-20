import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgs0yzbjm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgs0yzbjm"/>`,
		"fallback": "la:envelope-solid",
	});
}

export default Component;
