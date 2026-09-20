import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/i/it0-7sb5c.css';
import '../../css/e/etaocreys.css';
import '../../css/g/g287oqbdv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="it0-7sb5c"/><path clip-rule="evenodd" class="etaocreys"/><path clip-rule="evenodd" class="g287oqbdv"/></g>`,
		"fallback": "skill-icons:aws-light",
	});
}

export default Component;
