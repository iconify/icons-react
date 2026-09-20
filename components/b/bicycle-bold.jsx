import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuzsc71hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuzsc71hw"/>`,
		"fallback": "streamline-ultimate:bicycle-bold",
	});
}

export default Component;
