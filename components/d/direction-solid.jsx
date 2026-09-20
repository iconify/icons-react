import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbncg7bec.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbncg7bec"/>`,
		"fallback": "teenyicons:direction-solid",
	});
}

export default Component;
