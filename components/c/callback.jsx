import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbai33bej.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/z/z6ykmyhyu.css';
import '../../css/q/qtw6_-box.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbai33bej"/><g class="wtfmx7b3v"><path class="z6ykmyhyu"/><path class="qtw6_-box"/></g>`,
		"fallback": "flat-color-icons:callback",
	});
}

export default Component;
