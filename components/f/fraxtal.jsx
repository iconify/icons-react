import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smr47_3mh.css';
import '../../css/p/ph-spx85e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smr47_3mh"/><path class="ph-spx85e"/>`,
		"fallback": "token:fraxtal",
	});
}

export default Component;
