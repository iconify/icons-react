import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s32tp0bbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s32tp0bbj"/>`,
		"fallback": "codicon:google-gemini",
	});
}

export default Component;
