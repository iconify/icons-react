import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sduv6uq4w.css';
import '../../css/w/wb4foqv9f.css';
import '../../css/z/zmbwsz-_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sduv6uq4w"/><path class="wb4foqv9f"/><path class="zmbwsz-_f"/></g>`,
		"fallback": "solar:git-commit-broken",
	});
}

export default Component;
