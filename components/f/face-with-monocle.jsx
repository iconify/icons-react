import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/m/m07ft36jh.css';
import '../../css/z/zbhq0bwlo.css';
import '../../css/h/ht011mxbb.css';
import '../../css/y/yzpdofb_c.css';
import '../../css/h/h9fdzacrs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="m07ft36jh"/><path class="zbhq0bwlo"/><path class="ht011mxbb"/><circle class="yzpdofb_c"/><path class="h9fdzacrs"/>`,
		"fallback": "openmoji:face-with-monocle",
	});
}

export default Component;
