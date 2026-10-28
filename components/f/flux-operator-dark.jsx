import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljh46-15w.css';
import '../../css/o/o50rx_7zv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljh46-15w"/><path class="o50rx_7zv"/>`,
		"fallback": "selfhst:flux-operator-dark",
	});
}

export default Component;
