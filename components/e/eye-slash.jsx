import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8bqi5ahx.css';
import '../../css/c/cq-wbst_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8bqi5ahx"/><path class="cq-wbst_a"/>`,
		"fallback": "vaadin:eye-slash",
	});
}

export default Component;
