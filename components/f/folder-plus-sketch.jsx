import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oowq1xd7l.css';
import '../../css/r/ri9pveb6w.css';
import '../../css/i/i2-mb_b3z.css';
import '../../css/o/oa1gtpbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oowq1xd7l"/><path class="ri9pveb6w wm-a"/><path class="i2-mb_b3z wm-k"/><path class="oa1gtpbec wm-a"/></g>`,
		"fallback": "withicons:folder-plus-sketch",
	});
}

export default Component;
