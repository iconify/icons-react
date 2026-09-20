import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqvkcwpos.css';
import '../../css/m/mvi6kjbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqvkcwpos"/><path clip-rule="evenodd" class="mvi6kjbza"/></g>`,
		"fallback": "lets-icons:folder-alt-fill",
	});
}

export default Component;
