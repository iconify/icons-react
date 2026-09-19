import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/begoqnbqd.css';
import '../../css/x/xwizttm5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="begoqnbqd"/><path class="xwizttm5s"/>`,
		"fallback": "boxicons:chess-knight",
	});
}

export default Component;
