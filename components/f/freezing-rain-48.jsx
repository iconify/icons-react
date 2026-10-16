import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv91ufroz.css';
import '../../css/y/y4teju86f.css';
import '../../css/k/kmncaq-ru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv91ufroz"/><path class="y4teju86f"/><path class="kmncaq-ru"/>`,
		"fallback": "energy-icons:freezing-rain-48",
	});
}

export default Component;
