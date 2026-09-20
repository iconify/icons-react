import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b38l9ebmj.css';
import '../../css/f/f875sibao.css';
import '../../css/j/jnn3kmblf.css';
import '../../css/p/pn8r1ob7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b38l9ebmj"/><path class="f875sibao"/><path class="jnn3kmblf"/><path class="pn8r1ob7o"/></g>`,
		"fallback": "streamline-plump-color:cog-automation",
	});
}

export default Component;
