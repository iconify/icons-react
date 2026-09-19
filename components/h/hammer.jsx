import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7uoh_pkm.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7uoh_pkm"/>`,
		"fallback": "whh:hammer",
	});
}

export default Component;
