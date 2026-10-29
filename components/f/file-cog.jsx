import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qvdvgyb-q.css';
import '../../css/o/ohv8w-olz.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/k/k35ok3k-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qvdvgyb-q wm-k"/><path class="ohv8w-olz wm-s"/><path class="hsmjbytjh"/><path class="k35ok3k-h wm-s"/></g>`,
		"fallback": "withicons-bauhaus:file-cog",
	});
}

export default Component;
