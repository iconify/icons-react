import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxo2_4bha.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxo2_4bha"/>`,
		"fallback": "f7:divide-circle-fill",
	});
}

export default Component;
