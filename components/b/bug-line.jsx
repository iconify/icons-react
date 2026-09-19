import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_rn6btc.css';
import '../../css/w/wfike8btc.css';
import '../../css/j/jx6g9rb7x.css';
import '../../css/a/azvqho4ni.css';
import '../../css/u/ua4j35bbf.css';
import '../../css/o/o59-qb3jw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 zc_rn6btc"/><circle class="clr-i-outline clr-i-outline-path-2 wfike8btc"/><circle class="clr-i-outline clr-i-outline-path-3 jx6g9rb7x"/><circle class="azvqho4ni clr-i-outline clr-i-outline-path-4"/><path class="clr-i-outline clr-i-outline-path-5 ua4j35bbf"/><path class="clr-i-outline clr-i-outline-path-6 o59-qb3jw"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bug-line",
	});
}

export default Component;
