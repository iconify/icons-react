import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxlvi1bje.css';
import '../../css/r/r9m45djyc.css';
import '../../css/m/mempy7bqs.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxlvi1bje"/><path class="r9m45djyc"/><path class="mempy7bqs"/>`,
		"fallback": "tabler-flags:czechia",
	});
}

export default Component;
