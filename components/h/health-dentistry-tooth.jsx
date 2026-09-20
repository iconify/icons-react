import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxqhxbc1l.css';
import '../../css/f/fo7gk3lhm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxqhxbc1l"/><path class="fo7gk3lhm"/>`,
		"fallback": "streamline-pixel:health-dentistry-tooth",
	});
}

export default Component;
