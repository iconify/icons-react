import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kftxfzu5d.css';
import '../../css/d/dwh6i6b0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kftxfzu5d"/><path class="dwh6i6b0b"/>`,
		"fallback": "selfhst:chhoto-url",
	});
}

export default Component;
