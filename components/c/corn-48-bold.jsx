import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yexrm9bgt.css';
import '../../css/b/bi3yz8b9a.css';
import '../../css/v/v964ge3ni.css';
import '../../css/h/htwye9bzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yexrm9bgt"/><path class="bi3yz8b9a"/><path class="v964ge3ni"/><path class="htwye9bzz"/>`,
		"fallback": "energy-icons:corn-48-bold",
	});
}

export default Component;
