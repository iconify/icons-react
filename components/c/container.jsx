import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylj9ssb8i.css';
import '../../css/o/om9t3h1fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ylj9ssb8i"/><path class="om9t3h1fs"/></g>`,
		"fallback": "lucide:container",
	});
}

export default Component;
