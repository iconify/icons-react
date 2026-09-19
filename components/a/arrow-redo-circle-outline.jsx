import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adblgzbva.css';
import '../../css/y/ybwzvccuq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adblgzbva"/><path class="ybwzvccuq"/>`,
		"fallback": "famicons:arrow-redo-circle-outline",
	});
}

export default Component;
