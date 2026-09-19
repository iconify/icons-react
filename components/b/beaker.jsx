import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3dtqdna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa3dtqdna"/>`,
		"fallback": "famicons:beaker",
	});
}

export default Component;
