import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd8as1mpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd8as1mpj"/>`,
		"fallback": "famicons:git-compare-sharp",
	});
}

export default Component;
