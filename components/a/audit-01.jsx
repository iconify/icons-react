import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wfwd8y9av.css';
import '../../css/r/rhy2hmbom.css';
import '../../css/g/gxnq7z-rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wfwd8y9av"/><path class="rhy2hmbom"/><path class="gxnq7z-rv"/></g>`,
		"fallback": "hugeicons:audit-01",
	});
}

export default Component;
