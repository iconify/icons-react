import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm7cvcbaz.css';
import '../../css/e/e36w6ebuc.css';
import '../../css/z/zpvsl_1rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm7cvcbaz wm-a"/><path class="e36w6ebuc wm-k"/><path class="wm-k zpvsl_1rm"/>`,
		"fallback": "withicons-bauhaus:hammer",
	});
}

export default Component;
