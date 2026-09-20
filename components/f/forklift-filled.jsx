import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvn751v_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvn751v_c"/>`,
		"fallback": "reicon:forklift-filled",
	});
}

export default Component;
