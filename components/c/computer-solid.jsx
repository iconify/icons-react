import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzo9mcduf.css';
import '../../css/n/nguoz603s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzo9mcduf"/><path clip-rule="evenodd" class="nguoz603s"/>`,
		"fallback": "teenyicons:computer-solid",
	});
}

export default Component;
