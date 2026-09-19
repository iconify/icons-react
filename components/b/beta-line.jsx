import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af218jb6k.css';
import '../../css/u/ugs63hb-j.css';
import '../../css/b/bo2nw_bfa.css';
import '../../css/c/csz4ppbvg.css';
import '../../css/c/cqaqi34vl.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af218jb6k clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 ugs63hb-j"/><path class="bo2nw_bfa clr-i-outline clr-i-outline-path-3"/><path class="clr-i-outline clr-i-outline-path-4 csz4ppbvg"/><path class="clr-i-outline clr-i-outline-path-5 cqaqi34vl"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:beta-line",
	});
}

export default Component;
