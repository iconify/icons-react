import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfr3hmr1v.css';
import '../../css/z/z4_1fsbrr.css';
import '../../css/c/cv4mn7b0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfr3hmr1v"/><path class="z4_1fsbrr"/><path class="cv4mn7b0k"/>`,
		"fallback": "energy-icons:hydrogen-trailer-48-bold",
	});
}

export default Component;
