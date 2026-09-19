import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o59bf8-pb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o59bf8-pb"/>`,
		"fallback": "f7:forward-end-alt",
	});
}

export default Component;
