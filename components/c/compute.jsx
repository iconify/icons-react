import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwotdib6l.css';
import '../../css/b/bhhw35bml.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwotdib6l"/><rect class="bhhw35bml"/>`,
		"fallback": "oui:compute",
	});
}

export default Component;
