import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krf7npbdz.css';
import '../../css/m/m3scqya2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krf7npbdz"/><path class="m3scqya2g"/>`,
		"fallback": "teenyicons:airplay-solid",
	});
}

export default Component;
