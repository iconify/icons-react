import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm3bjm3aa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm3bjm3aa"/>`,
		"fallback": "ix:connector-chart",
	});
}

export default Component;
