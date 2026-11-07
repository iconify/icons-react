import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooet5sy8y.css';
import '../../css/x/xkutso85b.css';
import '../../css/r/rup4j16fw.css';
import '../../css/b/bogwy2v0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooet5sy8y"/><path clip-rule="evenodd" class="xkutso85b"/><path clip-rule="evenodd" class="rup4j16fw"/><path clip-rule="evenodd" class="bogwy2v0w"/>`,
		"fallback": "solar:cart-plus-outline",
	});
}

export default Component;
