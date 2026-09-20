import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ljfo4vnxc.css';
import '../../css/e/e2w2-bc9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ljfo4vnxc"/><path class="e2w2-bc9o"/></g>`,
		"fallback": "tabler:brand-evernote",
	});
}

export default Component;
