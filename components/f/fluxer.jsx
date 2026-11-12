import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ryw4bkw.css';
import '../../css/s/st-osqbzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w5ryw4bkw"/><path class="st-osqbzv"/>`,
		"fallback": "selfhst:fluxer",
	});
}

export default Component;
