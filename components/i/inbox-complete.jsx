import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhtb7rx0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhtb7rx0g"/>`,
		"fallback": "rivet-icons:inbox-complete",
	});
}

export default Component;
