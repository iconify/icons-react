import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inq2hh19w.css';
import '../../css/q/qyhjd8bnv.css';

const viewBox = {"width":74,"height":74};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inq2hh19w"/><path class="qyhjd8bnv"/></g>`,
		"fallback": "thesvg-color:heroui-light",
	});
}

export default Component;
