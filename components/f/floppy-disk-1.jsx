import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7dw8pb9h.css';
import '../../css/u/ukxvxxbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r7dw8pb9h"/><path class="ukxvxxbkn"/></g>`,
		"fallback": "streamline-ultimate:floppy-disk-1",
	});
}

export default Component;
