import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b38l9ebmj.css';
import '../../css/d/dp8g2dbaz.css';
import '../../css/j/jnn3kmblf.css';
import '../../css/o/os_pxozit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b38l9ebmj"/><path class="dp8g2dbaz"/><path class="jnn3kmblf"/><path class="os_pxozit"/></g>`,
		"fallback": "streamline-plump-color:cog",
	});
}

export default Component;
