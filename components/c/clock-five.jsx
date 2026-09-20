import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cep2c0bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cep2c0bra"/>`,
		"fallback": "uis:clock-five",
	});
}

export default Component;
