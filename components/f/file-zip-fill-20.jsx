import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rji5-yomq.css';
import '../../css/o/o1xu07rok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rji5-yomq"/><path class="o1xu07rok"/>`,
		"fallback": "garden:file-zip-fill-20",
	});
}

export default Component;
