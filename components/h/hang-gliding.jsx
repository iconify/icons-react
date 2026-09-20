import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmu6_gbsz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmu6_gbsz"/>`,
		"fallback": "map:hang-gliding",
	});
}

export default Component;
