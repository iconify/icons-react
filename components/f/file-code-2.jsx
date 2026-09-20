import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xugjf_9bj.css';
import '../../css/x/xlseyyopz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xugjf_9bj"/><path class="xlseyyopz"/></g>`,
		"fallback": "lucide:file-code-2",
	});
}

export default Component;
