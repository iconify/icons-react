import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwcqqit1h.css';
import '../../css/c/cpstsachi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwcqqit1h"/><path class="cpstsachi"/>`,
		"fallback": "carbon:db2-buffer-pool",
	});
}

export default Component;
