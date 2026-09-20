import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krths5bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krths5bmb"/>`,
		"fallback": "pixel:at-solid",
	});
}

export default Component;
