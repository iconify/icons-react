import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fgqe3-b2w.css';
import '../../css/r/r315h5b8w.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/z/zrrjdvbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fgqe3-b2w wm-k"/><path class="r315h5b8w wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="wm-a zrrjdvbzr"/></g>`,
		"fallback": "withicons:briefcase-engrave",
	});
}

export default Component;
