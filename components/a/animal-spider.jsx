import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siikb1s6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siikb1s6w"/>`,
		"fallback": "healthicons:animal-spider",
	});
}

export default Component;
