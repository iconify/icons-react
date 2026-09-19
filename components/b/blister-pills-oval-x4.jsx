import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig5g98dmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ig5g98dmx"/>`,
		"fallback": "healthicons:blister-pills-oval-x4",
	});
}

export default Component;
