import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fyt-2wbzl.css';
import '../../css/r/r1b3x3b8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fyt-2wbzl"/><path class="r1b3x3b8j"/></g>`,
		"fallback": "icon-park-solid:blocks-and-arrows",
	});
}

export default Component;
