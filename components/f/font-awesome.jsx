import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj1ahmbzh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj1ahmbzh"/>`,
		"fallback": "fa7-regular:font-awesome",
	});
}

export default Component;
