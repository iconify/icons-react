import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ywr4c2baa.css';
import '../../css/z/z8opg0bqn.css';
import '../../css/k/k6_ytgboa.css';
import '../../css/b/b0du0bczm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ywr4c2baa"/><path class="z8opg0bqn"/><path class="k6_ytgboa"/><path class="b0du0bczm"/></g>`,
		"fallback": "streamline-sharp-color:deepfake-technology-2-flat",
	});
}

export default Component;
