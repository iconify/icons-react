import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq4w3cc3j.css';
import '../../css/b/bf844qbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jq4w3cc3j"/><path class="bf844qbzg"/></g>`,
		"fallback": "lucide:file-heart",
	});
}

export default Component;
