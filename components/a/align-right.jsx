import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/pwt-kj.css';
import '../../css/c/cejmhd.css';
import '../../css/j/jx3bms.css';
import '../../css/b/bjzq0h.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c pwt-kj"/><path class="a0m25c cejmhd"/><path class="a0m25c jx3bms"/><path class="a0m25c bjzq0h"/>`,
		"fallback": "line-md:align-right",
	});
}

export default Component;
