import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io9_9gbtr.css';
import '../../css/k/koafcjh_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="io9_9gbtr"/><path class="koafcjh_f"/>`,
		"fallback": "selfhst:excaliself",
	});
}

export default Component;
