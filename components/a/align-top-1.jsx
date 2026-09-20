import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h049grbva.css';
import '../../css/t/tfudwubyz.css';
import '../../css/o/oifdivbbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h049grbva"/><path class="tfudwubyz"/><path class="oifdivbbw"/></g>`,
		"fallback": "streamline-flex-color:align-top-1",
	});
}

export default Component;
