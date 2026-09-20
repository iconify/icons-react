import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/i/i6sl99bcm.css';
import '../../css/o/onxs-abuq.css';
import '../../css/z/z-cavorqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="i6sl99bcm"/><path class="onxs-abuq"/><path class="z-cavorqj"/></g>`,
		"fallback": "streamline-kameleon-color:article-file-2-duo",
	});
}

export default Component;
