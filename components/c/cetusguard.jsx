import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjoxk1bjv.css';
import '../../css/t/t4mbssbth.css';
import '../../css/a/ashcbkuqe.css';
import '../../css/o/o-lh9hk2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjoxk1bjv"/><path class="t4mbssbth"/><path class="ashcbkuqe"/><path class="o-lh9hk2w"/>`,
		"fallback": "selfhst:cetusguard",
	});
}

export default Component;
