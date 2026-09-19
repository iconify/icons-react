import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzdk69b8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lzdk69b8v"/>`,
		"fallback": "healthicons:4",
	});
}

export default Component;
