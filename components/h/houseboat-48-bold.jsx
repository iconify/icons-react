import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnmq2wbpk.css';
import '../../css/g/geai1620k.css';
import '../../css/v/v8pb6_0jz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnmq2wbpk"/><path class="geai1620k"/><path class="v8pb6_0jz"/>`,
		"fallback": "energy-icons:houseboat-48-bold",
	});
}

export default Component;
