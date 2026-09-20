import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr_r5vbye.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr_r5vbye"/>`,
		"fallback": "teenyicons:crop-solid",
	});
}

export default Component;
