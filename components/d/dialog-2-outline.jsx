import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fidu2rqlh.css';
import '../../css/v/vf2lheb-c.css';
import '../../css/s/syutu7akj.css';
import '../../css/r/r01fs0f5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fidu2rqlh"/><path class="vf2lheb-c"/><path class="syutu7akj"/><path class="r01fs0f5x"/>`,
		"fallback": "solar:dialog-2-outline",
	});
}

export default Component;
