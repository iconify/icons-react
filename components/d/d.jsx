import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfae_b7ux.css';
import '../../css/d/dqr3ofb2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfae_b7ux"/><circle class="dqr3ofb2c"/>`,
		"fallback": "material-icon-theme:d",
	});
}

export default Component;
