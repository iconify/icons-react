import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbo1zab8w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbo1zab8w"/>`,
		"fallback": "fa7-solid:box-archive",
	});
}

export default Component;
