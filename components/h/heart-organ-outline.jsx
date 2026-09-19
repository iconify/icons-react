import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh2ht-bpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zh2ht-bpj"/>`,
		"fallback": "healthicons:heart-organ-outline",
	});
}

export default Component;
