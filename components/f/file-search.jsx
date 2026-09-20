import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sleag_yqb.css';
import '../../css/i/i-420qk_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sleag_yqb"/><circle class="i-420qk_u"/></g>`,
		"fallback": "meteor-icons:file-search",
	});
}

export default Component;
