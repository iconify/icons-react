import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_4ht5bkm.css';
import '../../css/q/q2dc-8bor.css';
import '../../css/b/b0jxrubul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_4ht5bkm"/><path class="q2dc-8bor"/><path class="b0jxrubul"/>`,
		"fallback": "gcp:cloud-deploy",
	});
}

export default Component;
