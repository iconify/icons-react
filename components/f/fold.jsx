import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfex1wr8k.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfex1wr8k"/>`,
		"fallback": "octicon:fold",
	});
}

export default Component;
