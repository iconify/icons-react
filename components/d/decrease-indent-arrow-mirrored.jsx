import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x42emccsx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x42emccsx"/>`,
		"fallback": "fluent-mdl2:decrease-indent-arrow-mirrored",
	});
}

export default Component;
