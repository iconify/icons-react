import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpk_fgauq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpk_fgauq"/>`,
		"fallback": "vaadin:gavel",
	});
}

export default Component;
