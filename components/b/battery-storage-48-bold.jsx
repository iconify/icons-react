import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9vsoabzg.css';
import '../../css/v/vj1jlxbvg.css';
import '../../css/s/s24mw7bud.css';
import '../../css/m/mkjr0bxlm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9vsoabzg"/><path class="vj1jlxbvg"/><path class="s24mw7bud"/><path class="mkjr0bxlm"/>`,
		"fallback": "energy-icons:battery-storage-48-bold",
	});
}

export default Component;
