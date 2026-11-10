import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkaodlwyt.css';
import '../../css/n/na4i35b7t.css';
import '../../css/v/vckz0vbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vkaodlwyt"/><path class="na4i35b7t"/><path clip-rule="evenodd" class="vckz0vbbe"/></g>`,
		"fallback": "andrsrxn:file-scan",
	});
}

export default Component;
