import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwb61c__y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwb61c__y"/>`,
		"fallback": "thesvg:dialogflow",
	});
}

export default Component;
