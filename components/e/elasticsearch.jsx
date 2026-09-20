import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui5i-fbas.css';
import '../../css/r/r6cuzyb1s.css';
import '../../css/l/l_h-rg3md.css';
import '../../css/l/lt41wmb7n.css';
import '../../css/n/ne65lbbag.css';
import '../../css/d/df5n5pb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui5i-fbas"/><path class="r6cuzyb1s"/><path class="l_h-rg3md"/><path class="lt41wmb7n"/><path class="ne65lbbag"/><path class="df5n5pb7u"/>`,
		"fallback": "selfhst:elasticsearch",
	});
}

export default Component;
