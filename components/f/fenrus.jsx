import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uslf4acad.css';
import '../../css/p/pju2zkapd.css';
import '../../css/t/tvhnkin6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uslf4acad"/><path class="pju2zkapd"/><path class="tvhnkin6o"/>`,
		"fallback": "selfhst:fenrus",
	});
}

export default Component;
