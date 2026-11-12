import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7c-2eb5a.css';
import '../../css/e/etsyzzgsk.css';
import '../../css/n/ntvq7ibes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7c-2eb5a"/><path class="etsyzzgsk"/><path class="ntvq7ibes"/>`,
		"fallback": "selfhst:colota",
	});
}

export default Component;
