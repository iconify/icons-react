import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwt7dmi2n.css';
import '../../css/c/c8k9rbbql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwt7dmi2n"/><path class="c8k9rbbql"/>`,
		"fallback": "vaadin:check-square-o",
	});
}

export default Component;
