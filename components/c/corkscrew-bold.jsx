import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzj2_rlmw.css';
import '../../css/r/r641g4blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzj2_rlmw"/><path class="r641g4blr"/>`,
		"fallback": "solar:corkscrew-bold",
	});
}

export default Component;
