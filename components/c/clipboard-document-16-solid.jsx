import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymn_uab8u.css';
import '../../css/x/xpn17_exa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ymn_uab8u"/><path class="xpn17_exa"/>`,
		"fallback": "heroicons:clipboard-document-16-solid",
	});
}

export default Component;
