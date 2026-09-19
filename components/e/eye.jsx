import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2bqgmpvm.css';
import '../../css/o/ove83va-t.css';

const viewBox = {"width":16,"height":13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2bqgmpvm"/><path class="ove83va-t"/>`,
		"fallback": "formkit:eye",
	});
}

export default Component;
