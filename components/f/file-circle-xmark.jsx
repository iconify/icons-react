import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r94-uy7iz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r94-uy7iz"/>`,
		"fallback": "fa7-solid:file-circle-xmark",
	});
}

export default Component;
