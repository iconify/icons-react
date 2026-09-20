import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsx3hltkg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsx3hltkg"/>`,
		"fallback": "temaki:field-hockey",
	});
}

export default Component;
