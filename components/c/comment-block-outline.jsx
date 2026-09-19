import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckg3ubbyx.css';
import '../../css/g/gcn7qhbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckg3ubbyx"/><path clip-rule="evenodd" class="gcn7qhbhs"/>`,
		"fallback": "basil:comment-block-outline",
	});
}

export default Component;
