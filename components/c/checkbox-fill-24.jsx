import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kogph_qlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kogph_qlv"/>`,
		"fallback": "octicon:checkbox-fill-24",
	});
}

export default Component;
