import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvp8ohbxt.css';
import '../../css/z/z1dlp4ywn.css';
import '../../css/o/oquifbbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvp8ohbxt"/><path class="z1dlp4ywn"/><path class="oquifbbgx"/></g>`,
		"fallback": "streamline-freehand-color:headphones-human",
	});
}

export default Component;
