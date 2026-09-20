import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c7bvh2b5b.css';
import '../../css/p/pcr5k932f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c7bvh2b5b"/><path class="pcr5k932f"/></g>`,
		"fallback": "lucide:bug-play",
	});
}

export default Component;
