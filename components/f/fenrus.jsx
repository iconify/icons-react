import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uslf4acad.css';
import '../../css/i/ia682rbyt.css';
import '../../css/r/r6heypbkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uslf4acad"/><path class="ia682rbyt"/><path class="r6heypbkr"/>`,
		"fallback": "selfhst:fenrus",
	});
}

export default Component;
