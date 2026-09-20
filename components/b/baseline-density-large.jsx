import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0s5e9nnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0s5e9nnv"/>`,
		"fallback": "tabler:baseline-density-large",
	});
}

export default Component;
