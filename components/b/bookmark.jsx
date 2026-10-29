import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1utpacju.css';
import '../../css/q/qeh8d-bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1utpacju"/><path class="qeh8d-bue"/>`,
		"fallback": "withicons-bauhaus:bookmark",
	});
}

export default Component;
