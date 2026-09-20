import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu8gm1bpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zu8gm1bpj"/>`,
		"fallback": "streamline-plump:camera-1-solid",
	});
}

export default Component;
