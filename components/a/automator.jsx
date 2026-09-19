import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gajh3do4a.css';

const viewBox = {"width":474,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gajh3do4a"/>`,
		"fallback": "file-icons:automator",
	});
}

export default Component;
