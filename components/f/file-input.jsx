import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/p/p2esu5r3r.css';
import '../../css/c/coq4s3bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="boz1ay-3b"/><path class="p2esu5r3r"/><path class="coq4s3bgb"/></g>`,
		"fallback": "lucide:file-input",
	});
}

export default Component;
