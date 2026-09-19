import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rdjav62ki.css';
import '../../css/x/xv7bhzb5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rdjav62ki"/><path class="xv7bhzb5w"/></g>`,
		"fallback": "si-glyph:bubble-chat",
	});
}

export default Component;
