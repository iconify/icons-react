import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1x38_bty.css';
import '../../css/l/l8zqkabzp.css';
import '../../css/s/su8twpfed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1x38_bty"/><path class="l8zqkabzp"/><path class="su8twpfed"/></g>`,
		"fallback": "tdesign:alarm",
	});
}

export default Component;
