import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afe3ybcfy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afe3ybcfy"/>`,
		"fallback": "f7:folder-fill-badge-minus",
	});
}

export default Component;
