import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcf77kb6k.css';
import '../../css/d/dvc0m-b_k.css';
import '../../css/i/ibhh__y8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcf77kb6k wm-k"/><path class="dvc0m-b_k wm-a"/><path class="ibhh__y8v wm-a"/>`,
		"fallback": "withicons-bauhaus:bike",
	});
}

export default Component;
