import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_9a4bc7g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_9a4bc7g"/>`,
		"fallback": "fluent-mdl2:assign-policy",
	});
}

export default Component;
