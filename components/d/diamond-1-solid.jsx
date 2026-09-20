import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1vh-bckm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1vh-bckm"/>`,
		"fallback": "streamline-plump:diamond-1-solid",
	});
}

export default Component;
