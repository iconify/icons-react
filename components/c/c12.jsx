import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nac_zjz4x.css';
import '../../css/e/easqq4b6a.css';
import '../../css/r/r6iky7b5v.css';
import '../../css/l/ljttgmb9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nac_zjz4x"/><path class="easqq4b6a"/><path class="r6iky7b5v"/><path class="ljttgmb9n"/></g>`,
		"fallback": "unjs:c12",
	});
}

export default Component;
