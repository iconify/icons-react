import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1zzn-6t.css';
import '../../css/r/ra2ravfoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw1zzn-6t"/><path class="ra2ravfoj"/>`,
		"fallback": "solar:dumbbells-2-bold",
	});
}

export default Component;
