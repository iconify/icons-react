import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1mfc1b6e.css';
import '../../css/m/m9-ge182a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1mfc1b6e"/><path clip-rule="evenodd" class="m9-ge182a"/>`,
		"fallback": "teenyicons:alarm-solid",
	});
}

export default Component;
