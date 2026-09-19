import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuiguff7q.css';
import '../../css/e/evzhspf6g.css';
import '../../css/t/tofyb9-yo.css';
import '../../css/y/y7v1bbcwh.css';
import '../../css/i/im6ax1imq.css';
import '../../css/u/uguf6dbib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuiguff7q"/><path class="evzhspf6g"/><path class="tofyb9-yo"/><path class="y7v1bbcwh"/><path class="im6ax1imq"/><path class="uguf6dbib"/>`,
		"fallback": "fxemoji:artistpalette",
	});
}

export default Component;
