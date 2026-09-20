import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk3vlyqac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk3vlyqac"/>`,
		"fallback": "mdi:inner-join",
	});
}

export default Component;
