import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmqbshfgv.css';
import '../../css/f/fkwnb7hig.css';
import '../../css/f/f-cbqwb3y.css';
import '../../css/v/vo2_w5r4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmqbshfgv"/><path class="fkwnb7hig"/><path class="f-cbqwb3y"/><path class="vo2_w5r4u"/>`,
		"fallback": "selfhst:homebox",
	});
}

export default Component;
