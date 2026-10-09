import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w18tredqi.css';
import '../../css/a/autp9p4ta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w18tredqi"/><path class="autp9p4ta"/>`,
		"fallback": "energy-icons:files-48",
	});
}

export default Component;
