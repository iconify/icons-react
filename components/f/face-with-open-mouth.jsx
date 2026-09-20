import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/k/kswcaolxm.css';
import '../../css/k/k4z7zsbhp.css';
import '../../css/h/hwmvdgbaf.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><circle class="kswcaolxm"/><circle class="k4z7zsbhp"/><circle class="hwmvdgbaf"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:face-with-open-mouth",
	});
}

export default Component;
