import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s56hofbat.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s56hofbat"/>`,
		"fallback": "pinhead:ice-pop-with-bite",
	});
}

export default Component;
