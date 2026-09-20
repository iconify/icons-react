import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwc2g5b2a.css';
import '../../css/p/pjb5o-bcb.css';
import '../../css/q/qapg4nbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwc2g5b2a"/><path class="pjb5o-bcb"/><path clip-rule="evenodd" class="qapg4nbep"/>`,
		"fallback": "token:epic",
	});
}

export default Component;
