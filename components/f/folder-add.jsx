import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a696i2_mv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a696i2_mv"/>`,
		"fallback": "uiw:folder-add",
	});
}

export default Component;
