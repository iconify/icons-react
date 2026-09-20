import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqn4ghivr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqn4ghivr"/>`,
		"fallback": "streamline-plump:input-box",
	});
}

export default Component;
