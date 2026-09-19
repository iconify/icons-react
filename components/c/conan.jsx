import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmlvw01bd.css';

const viewBox = {"width":481,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmlvw01bd"/>`,
		"fallback": "file-icons:conan",
	});
}

export default Component;
