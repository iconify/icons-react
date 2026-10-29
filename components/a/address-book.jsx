import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j40xsqehc.css';
import '../../css/g/gigfzcceu.css';
import '../../css/q/q43nulhsd.css';
import '../../css/p/p3cg6-b9n.css';
import '../../css/v/vtes5r9nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j40xsqehc wm-k"/><path class="gigfzcceu wm-k"/><path class="q43nulhsd wm-k"/><path class="p3cg6-b9n wm-a"/><path class="vtes5r9nd wm-a"/>`,
		"fallback": "withicons-bauhaus:address-book",
	});
}

export default Component;
