import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/l/lu4zihdbk.css';
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
		"content": `<path class="wvggpac7z"/><path class="lu4zihdbk"/><path class="mg7ihkb7k"/><path class="d-rurg29d"/>`,
		"fallback": "energy-icons:house-snowflake-48",
	});
}

export default Component;
