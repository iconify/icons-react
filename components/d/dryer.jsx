import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doo-tobgu.css';
import '../../css/a/atcuyybgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doo-tobgu"/><path class="atcuyybgn"/>`,
		"fallback": "bxs:dryer",
	});
}

export default Component;
