import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v90gbqbox.css';
import '../../css/y/yfz3w9lrl.css';
import '../../css/t/t8ed8cb_k.css';
import '../../css/u/u85np2b1x.css';
import '../../css/s/subiqwbbi.css';
import '../../css/g/ghq3jv5in.css';
import '../../css/u/u8zxqedgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="v90gbqbox"/><circle class="yfz3w9lrl"/><circle class="t8ed8cb_k"/><circle class="u85np2b1x"/><circle class="subiqwbbi"/><circle class="ghq3jv5in"/><path class="u8zxqedgz"/></g>`,
		"fallback": "majesticons:ferris-wheel",
	});
}

export default Component;
