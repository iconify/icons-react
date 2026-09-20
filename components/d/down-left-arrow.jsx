import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw0s58bcd.css';
import '../../css/i/imnugdlgh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw0s58bcd"/><path class="imnugdlgh"/>`,
		"fallback": "openmoji:down-left-arrow",
	});
}

export default Component;
