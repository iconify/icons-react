import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrk88uxja.css';
import '../../css/q/qt2057bva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrk88uxja"/><path class="qt2057bva"/>`,
		"fallback": "energy-icons:app-window-48-bold",
	});
}

export default Component;
