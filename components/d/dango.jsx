import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk1uidbkm.css';
import '../../css/i/i191j5bfe.css';
import '../../css/s/sefr00bhg.css';
import '../../css/z/z9p97smkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk1uidbkm"/><path class="i191j5bfe"/><path class="sefr00bhg"/><path class="z9p97smkm"/>`,
		"fallback": "fxemoji:dango",
	});
}

export default Component;
