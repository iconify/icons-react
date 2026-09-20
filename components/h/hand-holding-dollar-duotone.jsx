import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs7bwc8re.css';
import '../../css/w/wirx_bx0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs7bwc8re"/><path clip-rule="evenodd" class="wirx_bx0f"/>`,
		"fallback": "stash:hand-holding-dollar-duotone",
	});
}

export default Component;
