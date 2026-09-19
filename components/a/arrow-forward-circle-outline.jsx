import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xobthpb_z.css';
import '../../css/l/ld5kc0m-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xobthpb_z"/><path class="ld5kc0m-n"/>`,
		"fallback": "ion:arrow-forward-circle-outline",
	});
}

export default Component;
