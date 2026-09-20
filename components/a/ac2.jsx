import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/groatub-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="groatub-m"/>`,
		"fallback": "reicon:ac2",
	});
}

export default Component;
