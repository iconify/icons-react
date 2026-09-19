import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5dsbbc0o.css';
import '../../css/l/l71mrm8fk.css';
import '../../css/h/hh_hn2b_u.css';
import '../../css/m/m4ajnwsrg.css';
import '../../css/i/iwke2cbpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5dsbbc0o"/><circle class="l71mrm8fk"/><path class="hh_hn2b_u"/><circle class="m4ajnwsrg"/><path class="iwke2cbpv"/>`,
		"fallback": "carbon:cloud-satellite-services",
	});
}

export default Component;
