import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l10w-sbyp.css';
import '../../css/q/qrjc3lvtw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l10w-sbyp"/><path class="qrjc3lvtw"/>`,
		"fallback": "teenyicons:bed-double-solid",
	});
}

export default Component;
