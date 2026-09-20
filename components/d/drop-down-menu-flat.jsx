import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1fgxbb7z.css';
import '../../css/t/ts4-t6bfy.css';
import '../../css/v/vsqee_1ne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m1fgxbb7z"/><path clip-rule="evenodd" class="ts4-t6bfy"/><path class="vsqee_1ne"/></g>`,
		"fallback": "streamline-plump-color:drop-down-menu-flat",
	});
}

export default Component;
