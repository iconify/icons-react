import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c75q14plq.css';
import '../../css/r/r2erxnb7t.css';
import '../../css/a/ao_2tkpff.css';
import '../../css/a/av160dcvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c75q14plq"/><path class="r2erxnb7t"/><path class="ao_2tkpff"/><path class="av160dcvj"/>`,
		"fallback": "ion:battery-charging-outline",
	});
}

export default Component;
