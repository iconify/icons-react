import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijwmx3hsq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ijwmx3hsq"/>`,
		"fallback": "teenyicons:indent-increase-solid",
	});
}

export default Component;
