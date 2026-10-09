import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vptd66bam.css';
import '../../css/x/x88lagbcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vptd66bam"/><path class="x88lagbcd"/>`,
		"fallback": "energy-icons:air-conditioner-20",
	});
}

export default Component;
