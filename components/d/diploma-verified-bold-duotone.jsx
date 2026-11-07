import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-p0544so.css';
import '../../css/y/ya5lozbiu.css';
import '../../css/u/uiiucxe1d.css';
import '../../css/i/iurn6wmvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-p0544so"/><path class="ya5lozbiu"/><path class="uiiucxe1d"/><path class="iurn6wmvg"/>`,
		"fallback": "solar:diploma-verified-bold-duotone",
	});
}

export default Component;
