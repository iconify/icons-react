import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbb0sudeg.css';
import '../../css/k/k743-oxfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbb0sudeg"/><path clip-rule="evenodd" class="k743-oxfl"/>`,
		"fallback": "ix:battery-three-quarter",
	});
}

export default Component;
