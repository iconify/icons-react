import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot3ue-bsu.css';

const viewBox = {"width":440,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot3ue-bsu"/>`,
		"fallback": "file-icons:cubit",
	});
}

export default Component;
