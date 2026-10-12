import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo825-vwk.css';
import '../../css/z/zcqk8ssib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo825-vwk"/><path class="zcqk8ssib"/>`,
		"fallback": "garden:emoji-grin-stroke-20",
	});
}

export default Component;
