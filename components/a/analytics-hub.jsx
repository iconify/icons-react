import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnn_acbmc.css';
import '../../css/l/lrp6bibkl.css';
import '../../css/c/c-9udcc7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnn_acbmc"/><path class="lrp6bibkl"/><path class="c-9udcc7y"/>`,
		"fallback": "gcp:analytics-hub",
	});
}

export default Component;
