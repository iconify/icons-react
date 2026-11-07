import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui7xt3chp.css';
import '../../css/a/aqhy-8h6r.css';
import '../../css/i/i0rmnxk2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui7xt3chp"/><path class="aqhy-8h6r"/><path clip-rule="evenodd" class="i0rmnxk2w"/>`,
		"fallback": "solar:bug-minimalistic-outline",
	});
}

export default Component;
