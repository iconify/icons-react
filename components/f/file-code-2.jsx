import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x859vvuco.css';
import '../../css/n/na_4mhdsu.css';
import '../../css/u/ung0jz3kx.css';
import '../../css/a/arh5w0bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x859vvuco"/><path class="na_4mhdsu"/><path class="ung0jz3kx"/><path class="arh5w0bwk"/></g>`,
		"fallback": "streamline-freehand-color:file-code-2",
	});
}

export default Component;
