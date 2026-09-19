import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrpvxnift.css';
import '../../css/i/i93xss1ad.css';
import '../../css/a/abwm02bki.css';
import '../../css/j/jgzc08efz.css';
import '../../css/b/bd42qi1fd.css';
import '../../css/z/z6dgytbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrpvxnift"/><path class="i93xss1ad"/><path class="abwm02bki"/><path class="jgzc08efz"/><path class="bd42qi1fd"/><path class="z6dgytbry"/>`,
		"fallback": "fxemoji:graduationcap",
	});
}

export default Component;
