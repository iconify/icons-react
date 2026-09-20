import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wyhvm9bid.css';
import '../../css/p/pz3nuqbgk.css';
import '../../css/x/x5v5-j2js.css';
import '../../css/r/r7i66rb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wyhvm9bid"/><path class="pz3nuqbgk"/><path class="x5v5-j2js"/><path class="r7i66rb3k"/></g>`,
		"fallback": "streamline-cyber:cards-2",
	});
}

export default Component;
