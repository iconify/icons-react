import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phu1k1bve.css';
import '../../css/t/t1zst8bsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phu1k1bve"/><path clip-rule="evenodd" class="t1zst8bsl"/></g>`,
		"fallback": "material-icon-theme:folder-luau",
	});
}

export default Component;
