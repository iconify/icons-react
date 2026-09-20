import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa47n1b8j.css';
import '../../css/f/fkrgg3o2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa47n1b8j"/><path class="fkrgg3o2o"/>`,
		"fallback": "selfhst:adobe-lightroom",
	});
}

export default Component;
