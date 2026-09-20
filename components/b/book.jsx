import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpj9684_w.css';
import '../../css/j/j062rccnk.css';
import '../../css/w/wobnozssh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpj9684_w"/><path clip-rule="evenodd" class="j062rccnk"/><path clip-rule="evenodd" class="wobnozssh"/></g>`,
		"fallback": "pepicons-print:book",
	});
}

export default Component;
