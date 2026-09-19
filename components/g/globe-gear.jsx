import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbza77bui.css';
import '../../css/t/tu6holb5a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbza77bui"/><path class="tu6holb5a"/>`,
		"fallback": "gis:globe-gear",
	});
}

export default Component;
