import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh8h2dyiw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh8h2dyiw"/>`,
		"fallback": "map:car-dealer",
	});
}

export default Component;
