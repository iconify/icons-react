import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-mnt58yd.css';
import '../../css/i/igo_o-d5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-mnt58yd"/><path class="igo_o-d5w"/>`,
		"fallback": "carbon:information",
	});
}

export default Component;
