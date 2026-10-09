import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxbs21b9m.css';
import '../../css/c/ckdcb_lym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxbs21b9m"/><path class="ckdcb_lym"/>`,
		"fallback": "energy-icons:id-card-48",
	});
}

export default Component;
