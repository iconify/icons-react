import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs_4a5yyu.css';
import '../../css/z/zetb63f3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs_4a5yyu"/><path class="zetb63f3z"/>`,
		"fallback": "energy-icons:charge-point-sign-48-bold",
	});
}

export default Component;
