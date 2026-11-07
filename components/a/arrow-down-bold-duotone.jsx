import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz_lgvb5c.css';
import '../../css/a/adl-4zb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pz_lgvb5c"/><path class="adl-4zb1u"/>`,
		"fallback": "solar:arrow-down-bold-duotone",
	});
}

export default Component;
