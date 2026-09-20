import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td8i4ib_z.css';
import '../../css/b/bxw0pccgm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td8i4ib_z"/><path class="bxw0pccgm"/>`,
		"fallback": "qlementine-icons:gauge-high-16",
	});
}

export default Component;
