import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuc7lobqs.css';
import '../../css/n/nby-j5t1p.css';
import '../../css/a/a0m07idav.css';
import '../../css/l/l9ntdwdwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuc7lobqs"/><path class="nby-j5t1p"/><path class="a0m07idav"/><path class="l9ntdwdwj"/>`,
		"fallback": "energy-icons:fuel-oil-tank-48-bold",
	});
}

export default Component;
