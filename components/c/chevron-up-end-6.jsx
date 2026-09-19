import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9-tsqbmv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9-tsqbmv"/>`,
		"fallback": "fluent-mdl2:chevron-up-end-6",
	});
}

export default Component;
