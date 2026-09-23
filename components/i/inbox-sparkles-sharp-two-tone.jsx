import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bpck14box.css';
import '../../css/s/snibgdcaa.css';
import '../../css/i/i645x0uvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bpck14box"/><path class="snibgdcaa"/><path class="i645x0uvs"/></g>`,
		"fallback": "keyline-icons:inbox-sparkles-sharp-two-tone",
	});
}

export default Component;
