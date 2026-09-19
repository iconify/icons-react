import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brlwmghtz.css';
import '../../css/o/oogtep92i.css';
import '../../css/q/qo0xsrbfa.css';
import '../../css/w/w5rzfabdq.css';
import '../../css/v/vqd-szbes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brlwmghtz"/><rect class="oogtep92i"/><circle class="qo0xsrbfa"/><path class="w5rzfabdq"/><rect class="vqd-szbes"/></g>`,
		"fallback": "icon-park-outline:gopro",
	});
}

export default Component;
