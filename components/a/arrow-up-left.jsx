import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ako15q_2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ako15q_2s"/>`,
		"fallback": "icomoon-free:arrow-up-left",
	});
}

export default Component;
