import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf6zsz37f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf6zsz37f"/>`,
		"fallback": "fa-solid:expand-arrows-alt",
	});
}

export default Component;
