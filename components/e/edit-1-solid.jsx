import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q882dvb6w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q882dvb6w"/>`,
		"fallback": "teenyicons:edit-1-solid",
	});
}

export default Component;
