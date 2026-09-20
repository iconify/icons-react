import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f1rl1zbis.css';
import '../../css/r/r38qfgbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f1rl1zbis"/><path class="r38qfgbjm"/></g>`,
		"fallback": "streamline-ultimate:blizzards-1-natural-disasters-blizzards-snow",
	});
}

export default Component;
