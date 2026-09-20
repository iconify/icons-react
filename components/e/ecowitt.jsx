import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic8rdibgp.css';
import '../../css/x/xrb5f7bdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ic8rdibgp"/><path class="xrb5f7bdm"/>`,
		"fallback": "selfhst:ecowitt",
	});
}

export default Component;
