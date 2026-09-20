import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xkajaqb1f.css';
import '../../css/c/c56bf993u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xkajaqb1f"/><path class="c56bf993u"/></g>`,
		"fallback": "tabler:devices-cog",
	});
}

export default Component;
