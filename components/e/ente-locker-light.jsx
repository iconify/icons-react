import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp1h2bbup.css';
import '../../css/v/vcbva_jjq.css';
import '../../css/y/ya37qbble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp1h2bbup"/><path class="vcbva_jjq"/><path class="ya37qbble"/>`,
		"fallback": "selfhst:ente-locker-light",
	});
}

export default Component;
