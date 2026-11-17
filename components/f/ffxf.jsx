import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sorxkmbtq.css';
import '../../css/k/kcrdbzn4r.css';
import '../../css/n/nvngqebvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="sorxkmbtq"/><path class="kcrdbzn4r"/><circle class="nvngqebvk"/>`,
		"fallback": "selfhst:ffxf",
	});
}

export default Component;
