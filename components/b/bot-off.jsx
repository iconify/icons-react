import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8q-w6eqy.css';
import '../../css/s/s09cx1bfa.css';
import '../../css/y/y3oshe5zq.css';
import '../../css/v/v2hoeky5j.css';
import '../../css/u/u4vzekoup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8q-w6eqy wm-a"/><path class="s09cx1bfa wm-a"/><path class="wm-k y3oshe5zq"/><path class="v2hoeky5j wm-a"/><path class="u4vzekoup wm-s"/>`,
		"fallback": "withicons-bauhaus:bot-off",
	});
}

export default Component;
