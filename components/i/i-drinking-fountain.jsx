import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyi0tcctg.css';
import '../../css/b/bz41hmbmv.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyi0tcctg"/><path class="bz41hmbmv"/>`,
		"fallback": "medical-icon:i-drinking-fountain",
	});
}

export default Component;
