import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qosnnxx8l.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/h/h0ezbvb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qosnnxx8l"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="h0ezbvb6a"/>`,
		"fallback": "solar:danger-triangle-outline",
	});
}

export default Component;
