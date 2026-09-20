import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdg5s2amp.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnlw9tbfh.css';
import '../../css/w/wkck6fb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGHwRGdWeY" class="rdg5s2amp"/></defs><g class="ft5dv1b6b"><path class="pnlw9tbfh"/><use href="#SVGHwRGdWeY"/><path class="wkck6fb3i"/><use href="#SVGHwRGdWeY"/></g>`,
		"fallback": "stash:file-import-solid",
	});
}

export default Component;
