import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ilb8yfl.css';
import '../../css/h/hjk7fac9x.css';
import '../../css/s/shoq0tb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ilb8yfl"/><path class="hjk7fac9x"/><path class="shoq0tb1c"/>`,
		"fallback": "token:dia",
	});
}

export default Component;
