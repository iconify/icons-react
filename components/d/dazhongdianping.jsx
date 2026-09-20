import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygcli8bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygcli8bhi"/>`,
		"fallback": "simple-icons:dazhongdianping",
	});
}

export default Component;
