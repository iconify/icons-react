import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znwf89bpf.css';

const viewBox = {"width":1280,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znwf89bpf"/>`,
		"fallback": "vs:cutlery",
	});
}

export default Component;
