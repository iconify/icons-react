import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oam4ppbzg.css';
import '../../css/f/fcf4ina2u.css';
import '../../css/y/yroi0ubrq.css';
import '../../css/s/s0opx4b7i.css';
import '../../css/l/lsdlwvjnr.css';
import '../../css/e/egiyvmb2b.css';
import '../../css/c/cdm56rb-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oam4ppbzg"/><circle class="fcf4ina2u"/><circle class="yroi0ubrq"/><path class="s0opx4b7i"/><circle class="lsdlwvjnr"/><path class="egiyvmb2b"/><path class="cdm56rb-f"/>`,
		"fallback": "carbon:carbon-ui-builder",
	});
}

export default Component;
