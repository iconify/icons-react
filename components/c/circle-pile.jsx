import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zopjch_2q.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/s/s368qvblr.css';
import '../../css/n/nc5jv0bhh.css';
import '../../css/x/xe53owbmy.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="zopjch_2q"/><circle class="w9-l4pzix"/><circle class="s368qvblr"/><circle class="nc5jv0bhh"/><circle class="xe53owbmy"/><circle class="ny1qr-80o"/></g>`,
		"fallback": "hugeicons:circle-pile",
	});
}

export default Component;
