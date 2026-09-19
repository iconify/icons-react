import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gpycsr50z.css';
import '../../css/t/th55hbb_y.css';
import '../../css/e/ehux52bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gpycsr50z"/><path class="th55hbb_y"/><path class="ehux52bxn"/></g>`,
		"fallback": "hugeicons:google-sheet",
	});
}

export default Component;
