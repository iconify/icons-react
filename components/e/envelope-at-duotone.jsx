import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knsscbb2e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lwntsjhjn.css';
import '../../css/f/ft22hdhmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knsscbb2e"/><g class="xtpeb-edw"><path class="lwntsjhjn"/><path class="ft22hdhmo"/></g>`,
		"fallback": "stash:envelope-at-duotone",
	});
}

export default Component;
