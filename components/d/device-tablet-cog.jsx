import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azc-dwb1v.css';
import '../../css/d/dnz5a6e3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="azc-dwb1v"/><path class="dnz5a6e3v"/></g>`,
		"fallback": "tabler:device-tablet-cog",
	});
}

export default Component;
