import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntlor5b6q.css';
import '../../css/v/vrcxitsse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ntlor5b6q"/><path clip-rule="evenodd" class="vrcxitsse"/></g>`,
		"fallback": "streamline-sharp-color:hand-washing-flat",
	});
}

export default Component;
