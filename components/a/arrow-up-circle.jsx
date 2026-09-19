import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tny2aw3uc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tny2aw3uc"/>`,
		"fallback": "famicons:arrow-up-circle",
	});
}

export default Component;
