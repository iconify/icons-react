import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6dc5-vlc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6dc5-vlc"/>`,
		"fallback": "fa-regular:id-badge",
	});
}

export default Component;
