import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvudebc2k.css';
import '../../css/v/v7l80ac5d.css';
import '../../css/h/h4_dhqi7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="v7l80ac5d"/><path class="h4_dhqi7c"/></g>`,
		"fallback": "keyline-icons:git-compare-arrows-sharp-two-tone",
	});
}

export default Component;
