import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ykis_9i.css';
import '../../css/h/h2ns-kbxr.css';
import '../../css/r/rwk270bfa.css';
import '../../css/l/lwv3nubsu.css';
import '../../css/o/o49acvbsf.css';
import '../../css/m/mb2en-b_h.css';
import '../../css/i/ipeb23j6h.css';
import '../../css/c/cjwfgmbzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6ykis_9i"/><path class="h2ns-kbxr"/><path class="rwk270bfa"/><path class="lwv3nubsu"/><path class="o49acvbsf"/><path class="mb2en-b_h"/><path class="ipeb23j6h"/><path class="cjwfgmbzb"/>`,
		"fallback": "selfhst:dokku",
	});
}

export default Component;
