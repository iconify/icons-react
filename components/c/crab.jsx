import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6kxnt1jd.css';
import '../../css/o/owtansbof.css';
import '../../css/q/qo6s3bcoz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6kxnt1jd"/><path class="owtansbof"/><path class="qo6s3bcoz"/></g>`,
		"fallback": "fluent-emoji-flat:crab",
	});
}

export default Component;
