import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0hjje8ss.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0hjje8ss"/>`,
		"fallback": "teenyicons:down-solid",
	});
}

export default Component;
