import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/lfxfqtu8m.css';
import '../../css/a/aqcas2i6m.css';
import '../../css/g/ghvo08b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="lfxfqtu8m"/><circle class="aqcas2i6m"/><path class="ghvo08b3e"/></g>`,
		"fallback": "lets-icons:chat-search",
	});
}

export default Component;
