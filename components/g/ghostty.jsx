import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dosrg5bml.css';
import '../../css/d/djaim6bic.css';
import '../../css/m/mp4dc4cxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dosrg5bml"/><path class="djaim6bic"/><path class="mp4dc4cxd"/>`,
		"fallback": "selfhst:ghostty",
	});
}

export default Component;
