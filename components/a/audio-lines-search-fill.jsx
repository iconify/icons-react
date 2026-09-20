import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug10fabmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug10fabmp"/>`,
		"fallback": "keyline-icons:audio-lines-search-fill",
	});
}

export default Component;
