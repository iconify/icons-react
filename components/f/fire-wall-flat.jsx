import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-2_3be0a.css';
import '../../css/a/aljv-2bww.css';
import '../../css/p/pueowy_uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-2_3be0a"/><path class="aljv-2bww"/><path clip-rule="evenodd" class="pueowy_uh"/></g>`,
		"fallback": "streamline-sharp-color:fire-wall-flat",
	});
}

export default Component;
