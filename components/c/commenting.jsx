import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmfhq6dt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqmfhq6dt"/>`,
		"fallback": "fa7-solid:commenting",
	});
}

export default Component;
