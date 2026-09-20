import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w2ztdb4bn.css';
import '../../css/l/l03k8nb-h.css';
import '../../css/p/pbk4v8bdw.css';
import '../../css/o/otwzbibsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="w2ztdb4bn"/><path class="l03k8nb-h"/><path class="pbk4v8bdw"/><path class="otwzbibsg"/></g>`,
		"fallback": "streamline-logos:google-calendar-logo",
	});
}

export default Component;
