import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrh36dbvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrh36dbvi"/>`,
		"fallback": "icon-park-outline:add-computer",
	});
}

export default Component;
