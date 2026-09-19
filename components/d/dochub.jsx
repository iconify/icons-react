import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w75wewt3f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w75wewt3f"/>`,
		"fallback": "fa7-brands:dochub",
	});
}

export default Component;
