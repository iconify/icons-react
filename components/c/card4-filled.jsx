import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szr80mb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szr80mb7g"/>`,
		"fallback": "reicon:card4-filled",
	});
}

export default Component;
