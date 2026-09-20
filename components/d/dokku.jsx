import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ykis_9i.css';
import '../../css/h/h2ns-kbxr.css';
import '../../css/a/apb0pnb2i.css';
import '../../css/l/lwv3nubsu.css';
import '../../css/w/wlc_9bbwy.css';
import '../../css/a/awp4kmbfp.css';
import '../../css/m/mb2en-b_h.css';
import '../../css/v/v5kv8lbzi.css';
import '../../css/c/cjwfgmbzb.css';
import '../../css/s/s0qc7xb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6ykis_9i"/><path class="h2ns-kbxr"/><path class="apb0pnb2i"/><path class="lwv3nubsu"/><path class="wlc_9bbwy"/><path class="awp4kmbfp"/><path class="mb2en-b_h"/><path class="v5kv8lbzi"/><path class="cjwfgmbzb"/><path class="s0qc7xb9u"/>`,
		"fallback": "selfhst:dokku",
	});
}

export default Component;
