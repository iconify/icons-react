import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g2e3-xb4j.css';
import '../../css/j/jfgjanxpp.css';
import '../../css/o/oqflbw88g.css';
import '../../css/o/ovtvrgkrb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="g2e3-xb4j"/><circle class="jfgjanxpp"/><circle class="oqflbw88g"/><path class="ovtvrgkrb"/></g>`,
		"fallback": "icon-park-solid:every-user",
	});
}

export default Component;
