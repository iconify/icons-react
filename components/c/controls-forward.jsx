import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl4fpbblp.css';
import '../../css/m/mlw4_tbsk.css';
import '../../css/k/k0b1qmxkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl4fpbblp"/><path class="mlw4_tbsk"/><path class="k0b1qmxkh"/></g>`,
		"fallback": "streamline-ultimate-color:controls-forward",
	});
}

export default Component;
