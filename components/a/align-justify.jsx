import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/w/w20zkn.css';
import '../../css/j/jpz_dx.css';
import '../../css/a/a7xz6k.css';
import '../../css/s/so-from-8.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c w20zkn"/><path class="a0m25c jpz_dx"/><path class="a0m25c a7xz6k"/>`,
		"fallback": "line-md:align-justify",
	});
}

export default Component;
