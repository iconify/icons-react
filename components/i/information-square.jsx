import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-mnt58yd.css';
import '../../css/m/mu5v6jmij.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-mnt58yd"/><path class="mu5v6jmij"/>`,
		"fallback": "carbon:information-square",
	});
}

export default Component;
