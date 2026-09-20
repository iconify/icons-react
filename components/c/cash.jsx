import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my3unjbkn.css';
import '../../css/y/y8ai33b1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my3unjbkn"/><path class="y8ai33b1b"/>`,
		"fallback": "nimbus:cash",
	});
}

export default Component;
