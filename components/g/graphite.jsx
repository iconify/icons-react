import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixba4jbjx.css';
import '../../css/n/nfuq28b1b.css';
import '../../css/r/rwvtvxb9z.css';
import '../../css/p/p63a8fbod.css';
import '../../css/e/eto7q3jmi.css';
import '../../css/q/qwqkqda_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixba4jbjx"/><path class="nfuq28b1b"/><path class="rwvtvxb9z"/><path class="p63a8fbod"/><path class="eto7q3jmi"/><path class="qwqkqda_t"/>`,
		"fallback": "selfhst:graphite",
	});
}

export default Component;
