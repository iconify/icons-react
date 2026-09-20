import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zidfd5b0r.css';
import '../../css/w/wb4b4ktjg.css';
import '../../css/t/tgdoe1bss.css';
import '../../css/c/cbokru48w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zidfd5b0r"/><path class="wb4b4ktjg"/><path class="tgdoe1bss"/><path class="cbokru48w"/>`,
		"fallback": "selfhst:archivebox",
	});
}

export default Component;
