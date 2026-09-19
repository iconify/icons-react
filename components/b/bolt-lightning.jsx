import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oot6bc-yj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oot6bc-yj"/>`,
		"fallback": "fa7-solid:bolt-lightning",
	});
}

export default Component;
