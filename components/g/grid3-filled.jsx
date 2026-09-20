import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu9dvm72x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu9dvm72x"/>`,
		"fallback": "reicon:grid3-filled",
	});
}

export default Component;
