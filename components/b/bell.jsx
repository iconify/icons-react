import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w94s8abil.css';
import '../../css/s/s2lruqbjy.css';
import '../../css/e/eb3emgd-t.css';
import '../../css/f/f4wbe42jj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="w94s8abil"/><path class="s2lruqbjy"/><path class="eb3emgd-t"/><path class="f4wbe42jj"/></g>`,
		"fallback": "streamline-plump-color:bell",
	});
}

export default Component;
