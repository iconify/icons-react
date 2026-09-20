import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbxkrlbja.css';
import '../../css/a/a7dps37by.css';
import '../../css/u/ubp-y7bxd.css';
import '../../css/z/zbkoumh9m.css';
import '../../css/s/sft5hp-6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbxkrlbja"/><ellipse class="a7dps37by"/><ellipse class="ubp-y7bxd"/><ellipse class="zbkoumh9m"/><ellipse class="sft5hp-6e"/>`,
		"fallback": "selfhst:argus",
	});
}

export default Component;
