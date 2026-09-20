import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/yn50phfws.css';
import '../../css/z/z5n2jklhr.css';
import '../../css/f/f40vlthbj.css';
import '../../css/r/rtbix5knz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="yn50phfws"/><path class="z5n2jklhr"/><path class="f40vlthbj"/><path class="rtbix5knz"/></g>`,
		"fallback": "streamline-cyber:doctor",
	});
}

export default Component;
