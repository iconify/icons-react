import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj-sx-box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj-sx-box"/>`,
		"fallback": "mdi:alphabetical-variant",
	});
}

export default Component;
