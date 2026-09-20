import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mkxepv8wz.css';
import '../../css/s/s80f5e39m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="mkxepv8wz"/><path class="s80f5e39m"/></g>`,
		"fallback": "lets-icons:folder-up",
	});
}

export default Component;
