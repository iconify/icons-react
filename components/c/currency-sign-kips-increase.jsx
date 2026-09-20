import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k43av-fvi.css';
import '../../css/m/mmfuymbtq.css';
import '../../css/l/lhqw-e7pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k43av-fvi"/><path class="mmfuymbtq"/><path class="lhqw-e7pa"/></g>`,
		"fallback": "streamline-ultimate:currency-sign-kips-increase",
	});
}

export default Component;
