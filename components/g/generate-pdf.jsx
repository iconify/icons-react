import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvhy-ba_m.css';
import '../../css/n/n7pqid28s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvhy-ba_m"/><path class="n7pqid28s"/>`,
		"fallback": "carbon:generate-pdf",
	});
}

export default Component;
