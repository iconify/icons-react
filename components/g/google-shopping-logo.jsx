import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hkp8nlzop.css';
import '../../css/l/l78etzbyf.css';
import '../../css/k/krfa7cniv.css';
import '../../css/t/tzdrbr9zn.css';
import '../../css/g/graxhiypk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hkp8nlzop"/><path class="l78etzbyf"/><path class="krfa7cniv"/><path class="tzdrbr9zn"/><path class="graxhiypk"/></g>`,
		"fallback": "streamline-logos:google-shopping-logo",
	});
}

export default Component;
