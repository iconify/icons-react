import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/j1nnh1bsa.css';
import '../../css/y/y6knu-sbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="j1nnh1bsa"/><path class="y6knu-sbu"/></g>`,
		"fallback": "lets-icons:box-refresh-alt-right",
	});
}

export default Component;
