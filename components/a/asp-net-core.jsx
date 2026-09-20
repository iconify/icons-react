import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or51mp33s.css';
import '../../css/l/ljtl2bbyd.css';
import '../../css/m/mhsun10on.css';
import '../../css/o/oai19b_2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or51mp33s"/><path class="ljtl2bbyd"/><path class="mhsun10on"/><path class="oai19b_2d"/>`,
		"fallback": "selfhst:asp-net-core",
	});
}

export default Component;
