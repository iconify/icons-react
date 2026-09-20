import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wtypjlrbc.css';
import '../../css/p/pobka0boh.css';
import '../../css/p/py3r5zb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wtypjlrbc"/><path class="pobka0boh"/><path class="py3r5zb2e"/></g>`,
		"fallback": "streamline-cyber:cog",
	});
}

export default Component;
