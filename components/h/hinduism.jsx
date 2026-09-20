import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sobt5obrd.css';
import '../../css/a/aws57erkg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="sobt5obrd"/><path class="aws57erkg"/></g>`,
		"fallback": "streamline-color:hinduism",
	});
}

export default Component;
