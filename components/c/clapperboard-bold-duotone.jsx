import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rykq8yo8d.css';
import '../../css/u/u-vlijawj.css';
import '../../css/a/at9l3acdr.css';
import '../../css/s/s78ywflqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rykq8yo8d"/><path class="u-vlijawj"/><path class="at9l3acdr"/><path class="s78ywflqo"/>`,
		"fallback": "solar:clapperboard-bold-duotone",
	});
}

export default Component;
