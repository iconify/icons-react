import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb_0hvarj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb_0hvarj"/>`,
		"fallback": "coolicons:copy-alt-2-round",
	});
}

export default Component;
