import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxk146b4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxk146b4b"/>`,
		"fallback": "healthicons:cardiology",
	});
}

export default Component;
