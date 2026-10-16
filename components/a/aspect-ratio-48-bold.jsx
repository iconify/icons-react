import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaet4wb5s.css';
import '../../css/i/inqjblbsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaet4wb5s"/><path class="inqjblbsz"/>`,
		"fallback": "energy-icons:aspect-ratio-48-bold",
	});
}

export default Component;
