import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7_h2kbdq.css';
import '../../css/j/j3sofdbhr.css';
import '../../css/y/yfwp74xij.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/u8he7_bxs.css';
import '../../css/k/kxvzih7vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7_h2kbdq"/><path class="j3sofdbhr"/><path class="yfwp74xij"/><g class="xtpeb-edw"><path class="u8he7_bxs"/><path class="kxvzih7vh"/></g>`,
		"fallback": "solar:global-bold-duotone",
	});
}

export default Component;
