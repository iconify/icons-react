import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzbjndnww.css';
import '../../css/c/cto4ue-da.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzbjndnww"/><path clip-rule="evenodd" class="cto4ue-da"/>`,
		"fallback": "qlementine-icons:font-16",
	});
}

export default Component;
