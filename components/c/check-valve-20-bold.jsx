import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef38vvb1i.css';
import '../../css/b/bic9zqbfw.css';
import '../../css/u/ufp1mnb9h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef38vvb1i"/><path class="bic9zqbfw"/><path class="ufp1mnb9h"/>`,
		"fallback": "energy-icons:check-valve-20-bold",
	});
}

export default Component;
