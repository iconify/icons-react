import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-he-fobn.css';
import '../../css/o/o5n61tbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f-he-fobn"/><path class="o5n61tbtj"/></g>`,
		"fallback": "lucide:folder-tree",
	});
}

export default Component;
