import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jyijnbc7m.css';
import '../../css/b/baz3brbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jyijnbc7m"/><path class="baz3brbpk"/></g>`,
		"fallback": "keyline-icons:bot-off-sharp-two-tone",
	});
}

export default Component;
