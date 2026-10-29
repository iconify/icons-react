import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzf2slbcj.css';
import '../../css/w/w1o9hzlef.css';
import '../../css/l/lh2qbzpry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzf2slbcj wm-k"/><path class="w1o9hzlef wm-k"/><path class="lh2qbzpry wm-a"/>`,
		"fallback": "withicons-bauhaus:gold-ingot",
	});
}

export default Component;
