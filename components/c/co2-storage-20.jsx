import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xok_3nz5k.css';
import '../../css/t/t2sid5ean.css';
import '../../css/k/k40br8m-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xok_3nz5k"/><path class="t2sid5ean"/><path class="k40br8m-h"/>`,
		"fallback": "energy-icons:co2-storage-20",
	});
}

export default Component;
