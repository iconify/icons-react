import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s50jjlb9t.css';
import '../../css/u/uevgwtb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s50jjlb9t"/><path class="uevgwtb1s"/></g>`,
		"fallback": "lucide-lab:carton",
	});
}

export default Component;
