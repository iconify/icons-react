import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gliza6bbj.css';
import '../../css/x/x8oc9s62k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gliza6bbj"/><path class="x8oc9s62k"/>`,
		"fallback": "energy-icons:ammonia-20",
	});
}

export default Component;
