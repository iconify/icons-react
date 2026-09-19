import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hin5qvbfj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hin5qvbfj"/>`,
		"fallback": "fa7-regular:face-meh",
	});
}

export default Component;
