import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qheceeb1h.css';
import '../../css/s/sy4soacjr.css';
import '../../css/q/qqtleebkg.css';
import '../../css/n/n-o51-mex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qheceeb1h"/><path class="sy4soacjr"/><path class="qqtleebkg"/><path class="n-o51-mex"/>`,
		"fallback": "solar:book-bookmark-bold-duotone",
	});
}

export default Component;
