import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2oou5y1h.css';
import '../../css/j/joldrnb5i.css';
import '../../css/d/ds51e_7li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2oou5y1h"/><path class="joldrnb5i"/><path class="ds51e_7li"/>`,
		"fallback": "streamline-ultimate:earth-setting-bold",
	});
}

export default Component;
