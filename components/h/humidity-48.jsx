import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khymdnb6j.css';
import '../../css/z/zjys3ecwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khymdnb6j"/><path class="zjys3ecwv"/>`,
		"fallback": "energy-icons:humidity-48",
	});
}

export default Component;
