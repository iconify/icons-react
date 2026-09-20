import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj6zuzb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj6zuzb8a"/>`,
		"fallback": "reicon:cd-filled",
	});
}

export default Component;
