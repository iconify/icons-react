import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyby05dnj.css';
import '../../css/v/vdxxfnntj.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pyby05dnj"/><path clip-rule="evenodd" class="vdxxfnntj"/><path class="uevo4sbur"/></g>`,
		"fallback": "streamline-color:database-setting-flat",
	});
}

export default Component;
