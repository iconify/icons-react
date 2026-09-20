import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbvvl1bla.css';
import '../../css/t/thpm74blf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wbvvl1bla"/><path class="thpm74blf"/>`,
		"fallback": "selfhst:atlas-network",
	});
}

export default Component;
