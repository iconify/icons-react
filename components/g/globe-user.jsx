import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rus7i6b6q.css';
import '../../css/n/na94o3ufs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rus7i6b6q"/><path class="na94o3ufs"/>`,
		"fallback": "gis:globe-user",
	});
}

export default Component;
