import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie6mjcplv.css';
import '../../css/v/v_suxqb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie6mjcplv"/><path class="v_suxqb2c"/>`,
		"fallback": "bxs:coffee-bean",
	});
}

export default Component;
