import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wazcg0b9c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wazcg0b9c"/>`,
		"fallback": "teenyicons:info-small-solid",
	});
}

export default Component;
