import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo4pizvlt.css';
import '../../css/u/u9pg7sbpc.css';
import '../../css/r/rd5o0ubin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo4pizvlt"/><path clip-rule="evenodd" class="u9pg7sbpc"/><path class="rd5o0ubin"/>`,
		"fallback": "qlementine-icons:flac-16",
	});
}

export default Component;
