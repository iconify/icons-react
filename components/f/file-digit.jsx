import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzd-zfwgv.css';
import '../../css/z/zu6ruz7sb.css';
import '../../css/w/wel6b6bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzd-zfwgv"/><path class="zu6ruz7sb"/><rect class="wel6b6bku"/></g>`,
		"fallback": "lucide:file-digit",
	});
}

export default Component;
