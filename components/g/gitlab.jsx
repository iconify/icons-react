import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vply4ib2u.css';
import '../../css/e/eea_i9bnw.css';
import '../../css/x/xz2rsdmzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vply4ib2u"/><path class="eea_i9bnw"/><path class="xz2rsdmzv"/>`,
		"fallback": "selfhst:gitlab",
	});
}

export default Component;
