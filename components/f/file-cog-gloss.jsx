import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x2gzap77l.css';
import '../../css/n/n8e1iibpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k x2gzap77l"/><path class="n8e1iibpa wm-s"/></g>`,
		"fallback": "withicons:file-cog-gloss",
	});
}

export default Component;
