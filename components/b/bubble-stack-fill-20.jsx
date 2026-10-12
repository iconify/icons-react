import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzk3ruo3u.css';
import '../../css/y/ybw6xbfmb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzk3ruo3u"/><path class="ybw6xbfmb"/>`,
		"fallback": "garden:bubble-stack-fill-20",
	});
}

export default Component;
