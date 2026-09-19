import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aogaj5_aa.css';
import '../../css/m/mtqe-rb2m.css';
import '../../css/i/il6_1tbws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="aogaj5_aa"/><circle class="mtqe-rb2m"/><path class="il6_1tbws"/></g>`,
		"fallback": "icon-park-solid:glasses",
	});
}

export default Component;
