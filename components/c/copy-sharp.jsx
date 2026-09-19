import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhwkk-pks.css';
import '../../css/s/spak13bjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhwkk-pks"/><path class="spak13bjn"/>`,
		"fallback": "famicons:copy-sharp",
	});
}

export default Component;
