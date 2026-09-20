import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eha3nnb1s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eha3nnb1s"/>`,
		"fallback": "temaki:dagger",
	});
}

export default Component;
