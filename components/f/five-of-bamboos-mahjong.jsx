import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sum2o0bye.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sum2o0bye"/>`,
		"fallback": "dinkie-icons:five-of-bamboos-mahjong",
	});
}

export default Component;
