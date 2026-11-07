import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlc6xfqvl.css';
import '../../css/q/qqluwf17f.css';
import '../../css/r/rwbdnz60g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlc6xfqvl"/><path class="qqluwf17f"/><path clip-rule="evenodd" class="rwbdnz60g"/>`,
		"fallback": "solar:dollar-bold",
	});
}

export default Component;
