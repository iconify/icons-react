import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyr5jws7y.css';
import '../../css/r/rf4ztnb7f.css';
import '../../css/d/d4bfwebii.css';
import '../../css/l/l61b8p6hi.css';
import '../../css/b/b8z5cxbaq.css';
import '../../css/o/ojd164b-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGoyidRdFK" x1="184" x2="328" y1="131.3" y2="380.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="jyr5jws7y"/><stop offset=".5" class="jyr5jws7y"/><stop offset="1" class="rf4ztnb7f"/></linearGradient></defs><circle fill="url(#SVGoyidRdFK)" class="d4bfwebii"/><path class="l61b8p6hi"/><g><path class="b8z5cxbaq"/><path class="ojd164b-w"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="2s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"/></g>`,
		"fallback": "meteocons:compass-fill",
	});
}

export default Component;
