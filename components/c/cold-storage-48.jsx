import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lji_pzt1f.css';
import '../../css/y/ymlv-kbac.css';
import '../../css/m/mg7ihkb7k.css';
import '../../css/d/d-rurg29d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lji_pzt1f"/><path class="ymlv-kbac"/><path class="mg7ihkb7k"/><path class="d-rurg29d"/>`,
		"fallback": "energy-icons:cold-storage-48",
	});
}

export default Component;
