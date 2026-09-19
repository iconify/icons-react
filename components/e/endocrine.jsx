import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kemrou4dr.css';
import '../../css/f/fp-t6vbdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path clip-rule="evenodd" class="kemrou4dr"/><path class="fp-t6vbdh"/></g>`,
		"fallback": "icon-park:endocrine",
	});
}

export default Component;
