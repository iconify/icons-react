import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkvl0ybhw.css';
import '../../css/q/qosnnxx8l.css';
import '../../css/x/x41xvfi0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkvl0ybhw"/><path class="qosnnxx8l"/><path class="x41xvfi0c"/>`,
		"fallback": "solar:danger-triangle-bold-duotone",
	});
}

export default Component;
