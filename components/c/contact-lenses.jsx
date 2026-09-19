import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fc0i6jz9j.css';
import '../../css/u/ujlvc1bor.css';
import '../../css/b/b5f5xnbyj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fc0i6jz9j"/><path class="ujlvc1bor"/><path class="b5f5xnbyj"/></g>`,
		"fallback": "healthicons:contact-lenses",
	});
}

export default Component;
