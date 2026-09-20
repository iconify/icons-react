import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ljbdk7b8o.css';
import '../../css/g/g8b7pyjyq.css';
import '../../css/p/p-3pv-dez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ljbdk7b8o"/><circle class="g8b7pyjyq"/><circle class="p-3pv-dez"/></g>`,
		"fallback": "majesticons:git-branch",
	});
}

export default Component;
