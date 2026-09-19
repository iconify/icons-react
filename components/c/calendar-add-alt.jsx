import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzxfrybrb.css';
import '../../css/g/gxe7jmbor.css';
import '../../css/t/tp9_xo__k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzxfrybrb"/><path class="gxe7jmbor"/><path class="tp9_xo__k"/>`,
		"fallback": "carbon:calendar-add-alt",
	});
}

export default Component;
