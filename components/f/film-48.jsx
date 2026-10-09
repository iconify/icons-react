import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htetqt6dv.css';
import '../../css/z/zh18k_bxi.css';
import '../../css/h/heyzer6mv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htetqt6dv"/><path class="zh18k_bxi"/><path class="heyzer6mv"/>`,
		"fallback": "energy-icons:film-48",
	});
}

export default Component;
