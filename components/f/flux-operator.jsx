import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9gh3cbby.css';
import '../../css/g/gljjdb6ri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9gh3cbby"/><path class="gljjdb6ri"/>`,
		"fallback": "selfhst:flux-operator",
	});
}

export default Component;
