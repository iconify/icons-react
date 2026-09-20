import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmbn4-8qw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmbn4-8qw"/>`,
		"fallback": "lineicons:crop",
	});
}

export default Component;
