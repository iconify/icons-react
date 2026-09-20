import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd6mj9e-i.css';
import '../../css/d/dn5b1_f-b.css';
import '../../css/p/phprfuhss.css';
import '../../css/p/p6_7y-bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd6mj9e-i"/><circle class="dn5b1_f-b"/><path class="phprfuhss"/><path class="p6_7y-bmy"/>`,
		"fallback": "selfhst:chrome-canary",
	});
}

export default Component;
