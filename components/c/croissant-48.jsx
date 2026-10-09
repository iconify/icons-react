import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwhnzx77j.css';
import '../../css/f/fu0uu6tgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwhnzx77j"/><path class="fu0uu6tgt"/>`,
		"fallback": "energy-icons:croissant-48",
	});
}

export default Component;
