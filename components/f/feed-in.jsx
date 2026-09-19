import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp3op9bqf.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/r/rypkkacwx.css';
import '../../css/k/klhwmxbnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp3op9bqf"/><g class="wtfmx7b3v"><path class="rypkkacwx"/><path class="klhwmxbnn"/></g>`,
		"fallback": "flat-color-icons:feed-in",
	});
}

export default Component;
