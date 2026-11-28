import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hemiprbfx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xei5bkbrz.css';
import '../../css/s/sxa77d4ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hemiprbfx secondary"/><g class="dt0cm9dhy primary"><path class="xei5bkbrz"/><path class="sxa77d4ni"/></g>`,
		"fallback": "iconaut:eject-duo",
	});
}

export default Component;
