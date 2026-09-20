import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp9f-xbrm.css';
import '../../css/i/iuap837mw.css';
import '../../css/z/z9s3ayxol.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/qkto1acsj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gp9f-xbrm"/><path clip-rule="evenodd" class="iuap837mw"/><path class="z9s3ayxol"/><path class="xjfc-xbtr"/><path class="qkto1acsj"/></g>`,
		"fallback": "streamline-color:ethereum-circle",
	});
}

export default Component;
