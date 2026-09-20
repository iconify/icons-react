import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uutlz_-9i.css';
import '../../css/g/gbqhv3bwt.css';
import '../../css/j/jj9cr0awe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uutlz_-9i"/><path class="gbqhv3bwt"/><path class="jj9cr0awe"/></g>`,
		"fallback": "streamline:instagram",
	});
}

export default Component;
