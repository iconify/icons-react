import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kejaeac3h.css';
import '../../css/s/sbbfclb0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kejaeac3h"/><path class="sbbfclb0h"/>`,
		"fallback": "selfhst:forgejo",
	});
}

export default Component;
