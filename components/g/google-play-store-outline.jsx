import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so2nuvbdo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so2nuvbdo"/>`,
		"fallback": "teenyicons:google-play-store-outline",
	});
}

export default Component;
