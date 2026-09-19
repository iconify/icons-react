import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b73k0pm-y.css';
import '../../css/v/v1qktebkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b73k0pm-y"/><path clip-rule="evenodd" class="v1qktebkd"/>`,
		"fallback": "basil:document-outline",
	});
}

export default Component;
