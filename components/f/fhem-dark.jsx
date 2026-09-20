import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_p2cdafc.css';
import '../../css/l/lbnij82qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_p2cdafc"/><path class="lbnij82qw"/>`,
		"fallback": "selfhst:fhem-dark",
	});
}

export default Component;
