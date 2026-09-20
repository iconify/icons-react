import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tua1clvxp.css';
import '../../css/i/imad5bjrh.css';
import '../../css/n/ngse4mb-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tua1clvxp"/><path class="imad5bjrh"/><path class="ngse4mb-a"/>`,
		"fallback": "selfhst:chorizard-dark",
	});
}

export default Component;
