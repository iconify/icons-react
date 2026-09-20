import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbp9e9bha.css';
import '../../css/y/yuh54r8ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vbp9e9bha"/><path class="yuh54r8ru"/></g>`,
		"fallback": "lucide:house-plus",
	});
}

export default Component;
