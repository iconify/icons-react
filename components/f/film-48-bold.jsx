import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7xqk_um.css';
import '../../css/x/xp2kcen4h.css';
import '../../css/t/tou7l3b1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7xqk_um"/><path class="xp2kcen4h"/><path class="tou7l3b1z"/>`,
		"fallback": "energy-icons:film-48-bold",
	});
}

export default Component;
