import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2bqtbcvs.css';
import '../../css/u/uq8jn4bmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2bqtbcvs"/><path class="uq8jn4bmu"/>`,
		"fallback": "selfhst:android-police",
	});
}

export default Component;
