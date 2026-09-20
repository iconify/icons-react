import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en6tw7btl.css';
import '../../css/o/osvsxebrn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="en6tw7btl"/><path class="osvsxebrn"/></g>`,
		"fallback": "streamline-plump-color:arrow-up-4-flat",
	});
}

export default Component;
