import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9h9hwd0t.css';
import '../../css/g/g1xl1cbjm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9h9hwd0t"/><path class="g1xl1cbjm"/>`,
		"fallback": "octicon:file-moved-16",
	});
}

export default Component;
