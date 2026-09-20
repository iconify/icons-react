import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzmz5dn5a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzmz5dn5a"/>`,
		"fallback": "teenyicons:depth-chart-solid",
	});
}

export default Component;
