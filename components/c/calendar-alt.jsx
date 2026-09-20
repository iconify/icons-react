import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irz5s5bib.css';
import '../../css/i/i6sdoobhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irz5s5bib"/><path class="i6sdoobhw"/>`,
		"fallback": "pixel:calendar-alt",
	});
}

export default Component;
