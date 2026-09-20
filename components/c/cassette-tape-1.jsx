import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sj4zuubtz.css';
import '../../css/x/x7h3yhw-a.css';
import '../../css/b/b2jxzxuul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sj4zuubtz"/><path class="x7h3yhw-a"/><path class="b2jxzxuul"/></g>`,
		"fallback": "streamline-cyber:cassette-tape-1",
	});
}

export default Component;
