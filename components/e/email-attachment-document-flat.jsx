import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9fb07b2a.css';
import '../../css/e/efmdt6itn.css';
import '../../css/i/imai4lbcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9fb07b2a"/><path class="efmdt6itn"/><path clip-rule="evenodd" class="imai4lbcd"/></g>`,
		"fallback": "streamline-plump-color:email-attachment-document-flat",
	});
}

export default Component;
