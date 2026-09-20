import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o80ugf82p.css';
import '../../css/s/s7npbt_3e.css';
import '../../css/z/z8p1h9b2n.css';
import '../../css/x/x6_pr9-xf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o80ugf82p"/><path class="s7npbt_3e"/><path class="z8p1h9b2n"/><path class="x6_pr9-xf"/>`,
		"fallback": "selfhst:ente-photos-light",
	});
}

export default Component;
