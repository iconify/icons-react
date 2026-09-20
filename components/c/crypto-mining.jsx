import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/klylokbsw.css';
import '../../css/f/fdk6o4k6l.css';
import '../../css/e/e6gylschw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="klylokbsw"/><path class="fdk6o4k6l"/><path class="e6gylschw"/></g>`,
		"fallback": "streamline-freehand:crypto-mining",
	});
}

export default Component;
