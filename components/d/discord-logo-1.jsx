import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oc4go7b1e.css';
import '../../css/r/rfjhzl2az.css';
import '../../css/m/my1ogs_oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="oc4go7b1e"/><path class="rfjhzl2az"/><path class="my1ogs_oj"/></g>`,
		"fallback": "streamline-logos:discord-logo-1",
	});
}

export default Component;
