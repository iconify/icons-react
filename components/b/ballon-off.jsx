import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuo1qt70o.css';
import '../../css/w/w55v4dhmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuo1qt70o"/><path class="w55v4dhmb"/></g>`,
		"fallback": "tabler:ballon-off",
	});
}

export default Component;
