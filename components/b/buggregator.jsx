import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c822n_byc.css';
import '../../css/j/jtxyyikiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c822n_byc"/><path class="jtxyyikiw"/>`,
		"fallback": "selfhst:buggregator",
	});
}

export default Component;
