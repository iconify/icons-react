import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nbbbucc-k.css';
import '../../css/j/jpijyacjj.css';
import '../../css/r/r1-lpnfzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nbbbucc-k"/><path class="jpijyacjj wm-shadow"/><path class="r1-lpnfzi"/></g>`,
		"fallback": "withicons:bold-engrave",
	});
}

export default Component;
