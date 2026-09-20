import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwsc7mbwv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwsc7mbwv"/>`,
		"fallback": "teenyicons:google-drive-solid",
	});
}

export default Component;
