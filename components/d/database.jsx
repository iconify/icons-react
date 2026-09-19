import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj200ab6i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj200ab6i"/>`,
		"fallback": "fluent-mdl2:database",
	});
}

export default Component;
