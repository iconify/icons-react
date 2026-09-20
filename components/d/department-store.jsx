import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i00exacev.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i00exacev"/>`,
		"fallback": "map:department-store",
	});
}

export default Component;
