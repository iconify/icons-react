import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl9n98xsl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl9n98xsl"/>`,
		"fallback": "fa7-solid:font-awesome-flag",
	});
}

export default Component;
