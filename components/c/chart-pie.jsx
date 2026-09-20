import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4yy3nb0m.css';
import '../../css/h/hxpwx2jys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4yy3nb0m"/><path class="hxpwx2jys"/>`,
		"fallback": "stash:chart-pie",
	});
}

export default Component;
