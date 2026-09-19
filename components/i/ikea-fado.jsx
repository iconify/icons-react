import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmlk55iho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmlk55iho"/>`,
		"fallback": "cbi:ikea-fado",
	});
}

export default Component;
