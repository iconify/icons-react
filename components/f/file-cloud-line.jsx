import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j36jq6bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j36jq6bsj"/>`,
		"fallback": "ri:file-cloud-line",
	});
}

export default Component;
