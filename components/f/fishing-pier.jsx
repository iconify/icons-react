import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha17z1bsn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha17z1bsn"/>`,
		"fallback": "map:fishing-pier",
	});
}

export default Component;
