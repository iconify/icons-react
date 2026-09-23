import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kps4-xb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kps4-xb-z"/>`,
		"fallback": "tabler:git-pull-request-unlisted",
	});
}

export default Component;
