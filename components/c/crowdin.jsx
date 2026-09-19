import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gexhilb3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gexhilb3y"/>`,
		"fallback": "file-icons:crowdin",
	});
}

export default Component;
