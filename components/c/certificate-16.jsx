import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu25cdcsl.css';
import '../../css/a/af8m14f_t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu25cdcsl"/><path clip-rule="evenodd" class="af8m14f_t"/>`,
		"fallback": "qlementine-icons:certificate-16",
	});
}

export default Component;
