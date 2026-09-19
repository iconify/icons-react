import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfmx7b3v.css';
import '../../css/c/c_7supbtj.css';
import '../../css/n/ng087tlft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtfmx7b3v"><path class="c_7supbtj"/><path class="ng087tlft"/></g>`,
		"fallback": "flat-color-icons:down",
	});
}

export default Component;
