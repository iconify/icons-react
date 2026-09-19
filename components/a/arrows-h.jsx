import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfnu644vg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfnu644vg"/>`,
		"fallback": "fa7-solid:arrows-h",
	});
}

export default Component;
