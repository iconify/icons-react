import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/y/yht086igq.css';
import '../../css/y/ydfxcwbuz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="yht086igq"/><path class="ydfxcwbuz"/>`,
		"fallback": "energy-icons:arrow-circle-down-48",
	});
}

export default Component;
