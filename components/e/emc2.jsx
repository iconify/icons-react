import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acpxm6b7v.css';
import '../../css/t/tvz2u-b5t.css';
import '../../css/q/qte40pcjk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acpxm6b7v"/><path class="tvz2u-b5t"/><path class="qte40pcjk"/>`,
		"fallback": "cryptocurrency:emc2",
	});
}

export default Component;
