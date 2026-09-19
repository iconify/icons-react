import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw7inrb-v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw7inrb-v"/>`,
		"fallback": "glyphs:cli-outline",
	});
}

export default Component;
