import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8lv_jb2c.css';

const viewBox = {"width":751,"height":785};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8lv_jb2c"/>`,
		"fallback": "ls:at",
	});
}

export default Component;
