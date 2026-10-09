import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r72vqtbkc.css';
import '../../css/s/sy67f09qo.css';
import '../../css/x/xyec1nbxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r72vqtbkc"/><path class="sy67f09qo"/><path class="xyec1nbxw"/>`,
		"fallback": "energy-icons:charging-cable-48",
	});
}

export default Component;
