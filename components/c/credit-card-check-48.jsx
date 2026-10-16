import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2sfo7bun.css';
import '../../css/i/i8lgm5omt.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2sfo7bun"/><path class="i8lgm5omt"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:credit-card-check-48",
	});
}

export default Component;
