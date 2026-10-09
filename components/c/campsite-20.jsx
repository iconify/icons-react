import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c259fp7uq.css';
import '../../css/r/rf7gwnj9m.css';
import '../../css/x/xvxiwibyx.css';
import '../../css/v/vzsiftpbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c259fp7uq"/><path class="rf7gwnj9m"/><path class="xvxiwibyx"/><path class="vzsiftpbh"/>`,
		"fallback": "energy-icons:campsite-20",
	});
}

export default Component;
