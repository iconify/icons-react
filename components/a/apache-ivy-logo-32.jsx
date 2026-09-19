import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9wrx1xgm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9wrx1xgm"/>`,
		"fallback": "fluent-mdl2:apache-ivy-logo-32",
	});
}

export default Component;
