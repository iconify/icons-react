import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-neh6-iz.css';

const viewBox = {"width":436,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-neh6-iz"/>`,
		"fallback": "file-icons:codemeta",
	});
}

export default Component;
