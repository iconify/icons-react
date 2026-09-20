import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zopjch_2q.css';
import '../../css/x/xe53owbmy.css';
import '../../css/s/s368qvblr.css';
import '../../css/n/ny1qr-80o.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/n/nc5jv0bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zopjch_2q"/><circle class="xe53owbmy"/><circle class="s368qvblr"/><circle class="ny1qr-80o"/><circle class="w9-l4pzix"/><circle class="nc5jv0bhh"/></g>`,
		"fallback": "lucide:circle-pile",
	});
}

export default Component;
