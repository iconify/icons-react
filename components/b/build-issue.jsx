import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhz6yxbna.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhz6yxbna"/>`,
		"fallback": "fluent-mdl2:build-issue",
	});
}

export default Component;
