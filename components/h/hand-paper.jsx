import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4f6m235g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4f6m235g"/>`,
		"fallback": "fa7-regular:hand-paper",
	});
}

export default Component;
