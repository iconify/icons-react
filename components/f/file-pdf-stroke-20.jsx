import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4q3a5btx.css';
import '../../css/x/x38o7w6oc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4q3a5btx"/><path class="x38o7w6oc"/>`,
		"fallback": "garden:file-pdf-stroke-20",
	});
}

export default Component;
