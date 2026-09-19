import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osbn5umaf.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osbn5umaf"/>`,
		"fallback": "fontisto:area-chart",
	});
}

export default Component;
