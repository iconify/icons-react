import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgngpzqfl.css';
import '../../css/p/pf54fdcpd.css';
import '../../css/e/eojx1yb7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgngpzqfl"/><path class="pf54fdcpd"/><path class="eojx1yb7v"/>`,
		"fallback": "energy-icons:git-merge-48-bold",
	});
}

export default Component;
