import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl2-kobue.css';
import '../../css/n/n93i43b7m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl2-kobue"/><path class="n93i43b7m"/>`,
		"fallback": "thesvg:dotnetcore",
	});
}

export default Component;
