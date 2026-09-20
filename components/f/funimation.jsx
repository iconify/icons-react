import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6jl-3b4w.css';

const viewBox = {"width":612,"height":90.8,"top":350.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6jl-3b4w"/>`,
		"fallback": "thesvg-color:funimation",
	});
}

export default Component;
