import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0fqkdb-z.css';
import '../../css/z/zrpz3wb1c.css';
import '../../css/s/soun1mbat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0fqkdb-z"/><path class="zrpz3wb1c"/><path class="soun1mbat"/>`,
		"fallback": "energy-icons:hot-water-48-bold",
	});
}

export default Component;
