import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/isarv1pye.css';
import '../../css/t/twfn4lxjv.css';
import '../../css/e/eya-shbjw.css';
import '../../css/f/fpw3n5gpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="isarv1pye"/><path class="twfn4lxjv"/><path class="eya-shbjw"/><path class="fpw3n5gpe"/></g>`,
		"fallback": "streamline-flex-color:calculator-1-flat",
	});
}

export default Component;
