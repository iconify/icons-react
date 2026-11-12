import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfl8971ej.css';
import '../../css/j/jh_hmbyeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfl8971ej"/><path class="jh_hmbyeg"/>`,
		"fallback": "selfhst:initiative-project-management-dark",
	});
}

export default Component;
