import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj807wb-b.css';
import '../../css/t/t8ed8cb_k.css';
import '../../css/u/uw_-t08lz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sj807wb-b"/><circle class="t8ed8cb_k"/><path class="uw_-t08lz"/>`,
		"fallback": "carbon:bee-bat",
	});
}

export default Component;
