import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9ibsrbjs.css';
import '../../css/h/hrdjmbc9r.css';
import '../../css/o/ob2hf8b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z9ibsrbjs"/><path class="hrdjmbc9r"/><path class="ob2hf8b8d"/></g>`,
		"fallback": "struq:image-add",
	});
}

export default Component;
