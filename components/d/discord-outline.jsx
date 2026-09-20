import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw3gh1bmc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw3gh1bmc"/>`,
		"fallback": "teenyicons:discord-outline",
	});
}

export default Component;
