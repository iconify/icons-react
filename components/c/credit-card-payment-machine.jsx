import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-mclwbrv.css';
import '../../css/v/ve76it-vi.css';
import '../../css/z/zranexbky.css';
import '../../css/d/dizveqbmt.css';
import '../../css/w/w65_f1b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-mclwbrv"/><path class="ve76it-vi"/><path class="zranexbky"/><path class="dizveqbmt"/><path class="w65_f1b8e"/></g>`,
		"fallback": "streamline-cyber-color:credit-card-payment-machine",
	});
}

export default Component;
