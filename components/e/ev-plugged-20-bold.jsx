import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cszoybbgj.css';
import '../../css/x/xaknxzbmx.css';
import '../../css/m/m07y7fbsy.css';
import '../../css/d/dp4gjjb8w.css';
import '../../css/h/h-htocc-k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cszoybbgj"/><path class="xaknxzbmx"/><path class="m07y7fbsy"/><path class="dp4gjjb8w"/><path class="h-htocc-k"/>`,
		"fallback": "energy-icons:ev-plugged-20-bold",
	});
}

export default Component;
