import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq6gfzbgo.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq6gfzbgo"/>`,
		"fallback": "whh:dominofour",
	});
}

export default Component;
