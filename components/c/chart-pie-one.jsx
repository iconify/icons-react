import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/verjt25gq.css';
import '../../css/j/jkqxc6rbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="verjt25gq"/><path class="jkqxc6rbv"/></g>`,
		"fallback": "icon-park-solid:chart-pie-one",
	});
}

export default Component;
