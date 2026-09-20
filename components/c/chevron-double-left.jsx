import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-nbq3b6j.css';
import '../../css/k/kl60h53tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-nbq3b6j"/><path class="kl60h53tc"/></g>`,
		"fallback": "stash:chevron-double-left",
	});
}

export default Component;
