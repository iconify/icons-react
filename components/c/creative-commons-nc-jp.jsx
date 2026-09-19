import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-92f7qth.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-92f7qth"/>`,
		"fallback": "fa7-brands:creative-commons-nc-jp",
	});
}

export default Component;
