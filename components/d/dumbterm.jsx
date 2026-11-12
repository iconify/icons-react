import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pby_48b_c.css';
import '../../css/w/wci5zzb5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pby_48b_c"/><path class="wci5zzb5n"/>`,
		"fallback": "selfhst:dumbterm",
	});
}

export default Component;
