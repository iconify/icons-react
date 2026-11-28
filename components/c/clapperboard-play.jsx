import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4wx-tw7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4wx-tw7b"/>`,
		"fallback": "noviair:clapperboard-play",
	});
}

export default Component;
