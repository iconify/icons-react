import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl93aw29w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl93aw29w"/>`,
		"fallback": "simple-icons:hivemq",
	});
}

export default Component;
