import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/m/mqp8nib7i.css';
import '../../css/x/xfcr-jbja.css';
import '../../css/m/m-swk2bsf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="mqp8nib7i"/><path class="xfcr-jbja"/><path class="m-swk2bsf"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:basque-flag",
	});
}

export default Component;
