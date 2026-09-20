import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l548n4rzz.css';
import '../../css/p/p9uwirbpd.css';
import '../../css/q/qk_yb2bju.css';
import '../../css/q/qa9rw79co.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l548n4rzz"/><path class="p9uwirbpd"/><path class="qk_yb2bju"/><path class="qa9rw79co"/>`,
		"fallback": "selfhst:airtable",
	});
}

export default Component;
