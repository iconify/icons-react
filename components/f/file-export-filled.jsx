import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a75vaqbtg.css';
import '../../css/m/m-ex0ftgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a75vaqbtg"/><path class="m-ex0ftgv"/>`,
		"fallback": "tdesign:file-export-filled",
	});
}

export default Component;
