import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qub73yblb.css';
import '../../css/j/jd-ahxb1j.css';
import '../../css/f/fk7qu-bqd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qub73yblb"/><path class="clr-i-outline clr-i-outline-path-2 jd-ahxb1j"/><path class="clr-i-outline clr-i-outline-path-3 fk7qu-bqd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:devices-line",
	});
}

export default Component;
