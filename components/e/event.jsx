import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_757dk6o.css';
import '../../css/t/the1faccv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_757dk6o"/><path class="the1faccv"/>`,
		"fallback": "carbon:event",
	});
}

export default Component;
