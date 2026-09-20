import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ilv_8sbcg.css';
import '../../css/g/gc8d5ja7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ilv_8sbcg"/><path class="gc8d5ja7z"/></g>`,
		"fallback": "streamline-plump:circle-and-square-shape",
	});
}

export default Component;
