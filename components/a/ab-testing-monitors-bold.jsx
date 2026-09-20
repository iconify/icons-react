import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4g_eabxw.css';
import '../../css/x/xkom2ibqa.css';
import '../../css/u/ujgfrqb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4g_eabxw"/><path class="xkom2ibqa"/><path class="ujgfrqb2y"/>`,
		"fallback": "streamline-ultimate:ab-testing-monitors-bold",
	});
}

export default Component;
