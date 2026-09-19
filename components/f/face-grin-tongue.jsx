import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbe25ixpk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbe25ixpk"/>`,
		"fallback": "fa7-solid:face-grin-tongue",
	});
}

export default Component;
