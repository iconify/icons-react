import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hj-ui1b9a.css';
import '../../css/e/ecknynbrw.css';
import '../../css/u/uxyxgac4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="hj-ui1b9a"/><path class="ecknynbrw"/><path class="uxyxgac4h"/></g>`,
		"fallback": "lets-icons:file-dock-add",
	});
}

export default Component;
