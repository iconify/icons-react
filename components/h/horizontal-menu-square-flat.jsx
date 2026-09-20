import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0xlz4b6u.css';
import '../../css/w/wa0-66bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0xlz4b6u"/><path clip-rule="evenodd" class="wa0-66bob"/></g>`,
		"fallback": "streamline-sharp-color:horizontal-menu-square-flat",
	});
}

export default Component;
