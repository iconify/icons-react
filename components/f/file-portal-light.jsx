import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irsl63llt.css';
import '../../css/n/nvwx11b3c.css';
import '../../css/n/n4xv7q49k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irsl63llt"/><path class="nvwx11b3c"/><path class="n4xv7q49k"/>`,
		"fallback": "selfhst:file-portal-light",
	});
}

export default Component;
