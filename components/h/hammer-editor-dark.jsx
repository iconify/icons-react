import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2v_2ib2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2v_2ib2w"/>`,
		"fallback": "selfhst:hammer-editor-dark",
	});
}

export default Component;
