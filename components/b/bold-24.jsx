import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf70wobwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf70wobwv"/>`,
		"fallback": "octicon:bold-24",
	});
}

export default Component;
