import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msx7ap0di.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="msx7ap0di"/>`,
		"fallback": "healthicons:diarrhea",
	});
}

export default Component;
