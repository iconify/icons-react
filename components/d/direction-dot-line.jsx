import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdagz9b_g.css';
import '../../css/m/mf2faab1e.css';
import '../../css/p/p83k8_fbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdagz9b_g"/><path class="mf2faab1e"/><path class="p83k8_fbw"/>`,
		"fallback": "mingcute:direction-dot-line",
	});
}

export default Component;
