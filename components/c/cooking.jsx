import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy4_knhwd.css';
import '../../css/z/zsplw2euu.css';
import '../../css/x/xxfidpltx.css';
import '../../css/f/fjdufdgrf.css';
import '../../css/l/lair98k-j.css';
import '../../css/b/bb6dw3b9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy4_knhwd"/><path class="zsplw2euu"/><circle class="xxfidpltx"/><circle class="fjdufdgrf"/><path class="lair98k-j"/><circle class="bb6dw3b9n"/>`,
		"fallback": "fxemoji:cooking",
	});
}

export default Component;
