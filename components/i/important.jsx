import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzym2cchq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzym2cchq"/>`,
		"fallback": "codicon:important",
	});
}

export default Component;
