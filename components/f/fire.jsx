import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcreuacyk.css';
import '../../css/u/ur8upeb-i.css';
import '../../css/b/bpoy8jcsn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcreuacyk"/><path class="ur8upeb-i"/><path class="bpoy8jcsn"/>`,
		"fallback": "openmoji:fire",
	});
}

export default Component;
