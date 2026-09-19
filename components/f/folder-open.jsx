import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfv_e4gpb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfv_e4gpb"/>`,
		"fallback": "fa6-regular:folder-open",
	});
}

export default Component;
