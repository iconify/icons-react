import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liblnjhws.css';
import '../../css/f/fjtbb1h3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liblnjhws"/><path class="fjtbb1h3u"/>`,
		"fallback": "eos-icons:dns",
	});
}

export default Component;
