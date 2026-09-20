import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahz_e6bni.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahz_e6bni"/>`,
		"fallback": "zondicons:folder-outline-add",
	});
}

export default Component;
