import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1rciofeb.css';
import '../../css/i/i_mb-ebrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1rciofeb"/><path class="i_mb-ebrx"/></g>`,
		"fallback": "tabler:device-watch-stats-2",
	});
}

export default Component;
