import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz3w198jl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz3w198jl"/>`,
		"fallback": "streamline:brain-cognitive-remix",
	});
}

export default Component;
