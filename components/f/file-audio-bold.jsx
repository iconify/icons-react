import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv_p3kcsw.css';
import '../../css/w/w6x-4ipkl.css';
import '../../css/x/x8_a0bb_i.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv_p3kcsw"/><path class="w6x-4ipkl"/><path clip-rule="evenodd" class="x8_a0bb_i"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-audio-bold",
	});
}

export default Component;
