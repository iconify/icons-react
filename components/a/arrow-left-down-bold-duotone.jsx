import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm99dfc3e.css';
import '../../css/c/cvyd4hdhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tm99dfc3e"/><path class="cvyd4hdhk"/>`,
		"fallback": "solar:arrow-left-down-bold-duotone",
	});
}

export default Component;
