import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy8dm9bqf.css';
import '../../css/u/uol-dpl7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy8dm9bqf"/><path class="uol-dpl7t"/>`,
		"fallback": "selfhst:frankmd-light",
	});
}

export default Component;
