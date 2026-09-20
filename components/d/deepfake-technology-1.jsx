import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqv-6tbdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqv-6tbdk"/>`,
		"fallback": "streamline-flex:deepfake-technology-1",
	});
}

export default Component;
