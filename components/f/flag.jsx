import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpx2wv53c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpx2wv53c"/>`,
		"fallback": "whh:flag",
	});
}

export default Component;
