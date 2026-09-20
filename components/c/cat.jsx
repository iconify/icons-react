import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkd0labxu.css';
import '../../css/s/szx5i3qoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lkd0labxu"/><path class="szx5i3qoh"/></g>`,
		"fallback": "lucide:cat",
	});
}

export default Component;
