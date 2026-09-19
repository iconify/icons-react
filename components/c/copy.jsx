import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ughq2cbhw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ughq2cbhw"/>`,
		"fallback": "fa-regular:copy",
	});
}

export default Component;
