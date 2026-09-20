import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsw5tr2lt.css';
import '../../css/i/ig6m21bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsw5tr2lt"/><path class="ig6m21bsl"/>`,
		"fallback": "octicon:crosshairs-24",
	});
}

export default Component;
