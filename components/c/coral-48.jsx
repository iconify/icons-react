import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by92osboh.css';
import '../../css/b/bt7ducbtn.css';
import '../../css/o/ops1169qo.css';
import '../../css/e/ew-rlnbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by92osboh"/><path class="bt7ducbtn"/><path class="ops1169qo"/><path class="ew-rlnbrf"/>`,
		"fallback": "energy-icons:coral-48",
	});
}

export default Component;
