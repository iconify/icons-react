import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s17iqx8kn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s17iqx8kn"/>`,
		"fallback": "map:bank",
	});
}

export default Component;
