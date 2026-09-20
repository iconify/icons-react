import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcx6q5b0x.css';
import '../../css/k/k5lp20bzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcx6q5b0x"/><path class="k5lp20bzk"/>`,
		"fallback": "selfhst:ideon",
	});
}

export default Component;
