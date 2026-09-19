import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juq_70b2e.css';
import '../../css/b/b48fucctu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juq_70b2e"/><path class="b48fucctu"/>`,
		"fallback": "heroicons:arrow-up-on-square-stack-16-solid",
	});
}

export default Component;
