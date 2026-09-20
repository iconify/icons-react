import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kul88tp0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kul88tp0v"/>`,
		"fallback": "streamline:arrow-roadmap-solid",
	});
}

export default Component;
