import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-3wh2bpf.css';
import '../../css/r/rxs5fmtky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-3wh2bpf"/><path clip-rule="evenodd" class="rxs5fmtky"/>`,
		"fallback": "solar:gallery-circle-bold",
	});
}

export default Component;
