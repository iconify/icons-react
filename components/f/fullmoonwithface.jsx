import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfj231j0y.css';
import '../../css/a/ayfs0cb5s.css';
import '../../css/w/wdxqc5bhz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sfj231j0y"/><path class="ayfs0cb5s"/><path class="wdxqc5bhz"/>`,
		"fallback": "fxemoji:fullmoonwithface",
	});
}

export default Component;
