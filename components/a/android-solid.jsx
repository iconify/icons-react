import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuoev4j6h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuoev4j6h"/>`,
		"fallback": "teenyicons:android-solid",
	});
}

export default Component;
