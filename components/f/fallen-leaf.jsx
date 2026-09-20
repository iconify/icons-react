import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcdy3zbpl.css';
import '../../css/j/jd002rb2b.css';
import '../../css/p/pdau_gb4m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcdy3zbpl"/><path class="jd002rb2b"/><path class="pdau_gb4m"/>`,
		"fallback": "openmoji:fallen-leaf",
	});
}

export default Component;
