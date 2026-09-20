import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-mgfz0ds.css';
import '../../css/m/m-lu0swiy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-mgfz0ds"/><path class="m-lu0swiy"/>`,
		"fallback": "openmoji:dress",
	});
}

export default Component;
