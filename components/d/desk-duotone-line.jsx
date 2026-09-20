import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbafr4bpn.css';
import '../../css/q/qw4-ijfxu.css';
import '../../css/d/dotup_wmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbafr4bpn"/><rect class="qw4-ijfxu"/><path class="dotup_wmp"/></g>`,
		"fallback": "lets-icons:desk-duotone-line",
	});
}

export default Component;
