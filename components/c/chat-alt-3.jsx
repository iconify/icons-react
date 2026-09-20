import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi3l8-bkb.css';
import '../../css/r/rpkswgq3h.css';
import '../../css/d/dujhcdcuw.css';
import '../../css/r/rgq401bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi3l8-bkb"/><circle class="rpkswgq3h"/><circle class="dujhcdcuw"/><circle class="rgq401bwy"/>`,
		"fallback": "lets-icons:chat-alt-3",
	});
}

export default Component;
