import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yry6u38_x.css';
import '../../css/v/vci34obyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yry6u38_x"/><path class="vci34obyc"/>`,
		"fallback": "selfhst:docking-station",
	});
}

export default Component;
