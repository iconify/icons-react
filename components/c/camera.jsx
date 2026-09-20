import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zwtw4ybnw.css';
import '../../css/f/fr_tmn9fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="zwtw4ybnw"/><circle class="fr_tmn9fp"/></g>`,
		"fallback": "lets-icons:camera",
	});
}

export default Component;
