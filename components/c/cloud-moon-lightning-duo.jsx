import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya4qm9bjb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imzldxsyv.css';
import '../../css/n/nbau5bnxf.css';
import '../../css/x/xbkcvubst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ya4qm9bjb"/><g class="dt0cm9dhy primary"><path class="imzldxsyv"/><path class="nbau5bnxf"/><path class="xbkcvubst"/></g>`,
		"fallback": "iconaut:cloud-moon-lightning-duo",
	});
}

export default Component;
