import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg43xbcaj.css';
import '../../css/i/itvcutb8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg43xbcaj"/><path class="itvcutb8d"/>`,
		"fallback": "teenyicons:inbox-solid",
	});
}

export default Component;
