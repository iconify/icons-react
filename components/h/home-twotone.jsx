import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz498ccmf.css';
import '../../css/z/z7-yybbxj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz498ccmf"/><path class="z7-yybbxj"/>`,
		"fallback": "ant-design:home-twotone",
	});
}

export default Component;
