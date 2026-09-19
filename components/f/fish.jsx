import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmn7ynbep.css';
import '../../css/y/yohhqnr3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bmn7ynbep"/><path class="yohhqnr3k"/>`,
		"fallback": "carbon:fish",
	});
}

export default Component;
