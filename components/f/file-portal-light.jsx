import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irsl63llt.css';
import '../../css/s/sbw6ahqto.css';
import '../../css/m/m8tny2bgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irsl63llt"/><path class="sbw6ahqto"/><path class="m8tny2bgm"/>`,
		"fallback": "selfhst:file-portal-light",
	});
}

export default Component;
