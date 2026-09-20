import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pfof69lal.css';
import '../../css/f/fl3ki1bni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pfof69lal"/><path class="fl3ki1bni"/></g>`,
		"fallback": "streamline:entertainment-news-paper-newspaper-periodical-fold-content",
	});
}

export default Component;
