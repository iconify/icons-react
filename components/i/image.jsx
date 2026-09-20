import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqjwjxbml.css';
import '../../css/p/ppg2okbvq.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fqjwjxbml"/><path class="ppg2okbvq"/><path class="wjltsrbuw"/></g>`,
		"fallback": "mynaui:image",
	});
}

export default Component;
