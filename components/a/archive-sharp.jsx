import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehuvywcsw.css';
import '../../css/k/k2om2cqop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ehuvywcsw"/><path class="k2om2cqop"/>`,
		"fallback": "famicons:archive-sharp",
	});
}

export default Component;
