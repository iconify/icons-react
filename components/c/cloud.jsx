import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahih-gn5b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahih-gn5b"/>`,
		"fallback": "fa7-regular:cloud",
	});
}

export default Component;
