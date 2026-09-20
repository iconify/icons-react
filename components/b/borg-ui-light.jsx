import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bff3rizlq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bff3rizlq"/>`,
		"fallback": "selfhst:borg-ui-light",
	});
}

export default Component;
