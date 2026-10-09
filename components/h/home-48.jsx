import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xypximg7a.css';
import '../../css/b/bqvhui-iq.css';
import '../../css/k/k167alb-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xypximg7a"/><path class="bqvhui-iq"/><path class="k167alb-k"/>`,
		"fallback": "energy-icons:home-48",
	});
}

export default Component;
