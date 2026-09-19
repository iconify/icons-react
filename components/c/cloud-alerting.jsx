import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opaq2dbry.css';
import '../../css/r/rqqek-bmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opaq2dbry"/><path class="rqqek-bmd"/>`,
		"fallback": "carbon:cloud-alerting",
	});
}

export default Component;
