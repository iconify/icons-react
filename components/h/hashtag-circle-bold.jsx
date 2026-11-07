import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w43uqtbnn.css';
import '../../css/p/pzgd11spf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w43uqtbnn"/><path clip-rule="evenodd" class="pzgd11spf"/>`,
		"fallback": "solar:hashtag-circle-bold",
	});
}

export default Component;
