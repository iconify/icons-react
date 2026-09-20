import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arac17bjm.css';
import '../../css/b/bjy6rwbot.css';
import '../../css/r/rc8gboi9c.css';
import '../../css/m/mfqg_7hka.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arac17bjm"/><path class="bjy6rwbot"/><path class="rc8gboi9c"/><path class="mfqg_7hka"/>`,
		"fallback": "openmoji:iceberg",
	});
}

export default Component;
