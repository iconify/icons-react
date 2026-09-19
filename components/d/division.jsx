import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/knq66i4mf.css';
import '../../css/o/owghvwb3e.css';
import '../../css/j/jxsnms7hz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="knq66i4mf"/><circle class="owghvwb3e"/><path class="jxsnms7hz"/></g>`,
		"fallback": "icon-park-outline:division",
	});
}

export default Component;
