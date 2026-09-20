import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv2s_thge.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv2s_thge"/>`,
		"fallback": "pinhead:crosswalk-markings-lines-paired",
	});
}

export default Component;
