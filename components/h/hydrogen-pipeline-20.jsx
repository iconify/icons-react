import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdfjzcrhz.css';
import '../../css/i/iyeej1bps.css';
import '../../css/v/vageni_ng.css';
import '../../css/c/cdv2l9bka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdfjzcrhz"/><path class="iyeej1bps"/><path class="vageni_ng"/><path class="cdv2l9bka"/>`,
		"fallback": "energy-icons:hydrogen-pipeline-20",
	});
}

export default Component;
