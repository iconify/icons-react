import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eju1qufva.css';
import '../../css/q/qele91b3l.css';
import '../../css/h/hobc68bet.css';
import '../../css/v/vdnsg9ohj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eju1qufva"/><path class="qele91b3l"/><circle class="hobc68bet"/><circle class="vdnsg9ohj"/>`,
		"fallback": "openmoji:android",
	});
}

export default Component;
