import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebflwhkmy.css';
import '../../css/o/o98-wvvyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebflwhkmy"/><path class="o98-wvvyw"/>`,
		"fallback": "famicons:bug-sharp",
	});
}

export default Component;
