import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y04glybhr.css';
import '../../css/q/q9ns9f5he.css';
import '../../css/v/v3uxt06nb.css';
import '../../css/c/c3zxx9bsd.css';
import '../../css/f/f4p-c0bsx.css';
import '../../css/q/qwp7-ef2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y04glybhr"/><path class="q9ns9f5he"/><path clip-rule="evenodd" class="v3uxt06nb"/><path class="c3zxx9bsd"/><path class="f4p-c0bsx"/><path clip-rule="evenodd" class="qwp7-ef2l"/></g>`,
		"fallback": "reicon:cup-music-duotone",
	});
}

export default Component;
