import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtq4xgbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtq4xgbbb"/>`,
		"fallback": "thesvg-color:apache-jmeter",
	});
}

export default Component;
