import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l954m5b7x.css';
import '../../css/l/lvqwy803y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l954m5b7x"/><path class="lvqwy803y"/>`,
		"fallback": "selfhst:inspircd",
	});
}

export default Component;
