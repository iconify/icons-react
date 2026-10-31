import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w37u6nj1g.css';
import '../../css/f/ft6yuqb7o.css';
import '../../css/l/l8fjmsy3u.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w37u6nj1g"/><path class="ft6yuqb7o"/><path class="l8fjmsy3u"/>`,
		"fallback": "tabler-flags:costa-rica",
	});
}

export default Component;
