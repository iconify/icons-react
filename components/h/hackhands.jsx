import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za0_gwbxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za0_gwbxj"/>`,
		"fallback": "cib:hackhands",
	});
}

export default Component;
