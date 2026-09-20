import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tz3uqmbva.css';
import '../../css/n/na_4mhdsu.css';
import '../../css/u/ung0jz3kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tz3uqmbva"/><path class="na_4mhdsu"/><path class="ung0jz3kx"/></g>`,
		"fallback": "streamline-freehand-color:file-code-java",
	});
}

export default Component;
