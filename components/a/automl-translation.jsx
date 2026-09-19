import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyd-5l9hj.css';
import '../../css/d/dko0y8bbo.css';
import '../../css/c/c-39a_bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyd-5l9hj"/><path class="dko0y8bbo"/><path class="c-39a_bhy"/>`,
		"fallback": "gcp:automl-translation",
	});
}

export default Component;
