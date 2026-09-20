import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zd17d0bwx.css';
import '../../css/f/fpt8mqvci.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zd17d0bwx"/><path class="fpt8mqvci"/></g>`,
		"fallback": "streamline:desktop-dollar",
	});
}

export default Component;
