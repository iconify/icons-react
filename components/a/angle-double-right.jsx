import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkb969b8t.css';
import '../../css/t/trm8ypqeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkb969b8t"/><path class="trm8ypqeu"/>`,
		"fallback": "vaadin:angle-double-right",
	});
}

export default Component;
