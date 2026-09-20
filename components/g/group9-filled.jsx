import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwqgl3b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwqgl3b3x"/>`,
		"fallback": "reicon:group9-filled",
	});
}

export default Component;
