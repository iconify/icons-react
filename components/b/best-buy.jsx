import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka56i2i7o.css';
import '../../css/p/ppaop13hw.css';
import '../../css/f/f0-nx3ual.css';

const viewBox = {"width":1000,"height":584.485};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka56i2i7o"/><path class="ppaop13hw"/><path class="f0-nx3ual"/>`,
		"fallback": "thesvg-color:best-buy",
	});
}

export default Component;
