import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5w07jbzw.css';
import '../../css/f/f30po-b8i.css';
import '../../css/c/c6en_42bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5w07jbzw"/><path class="f30po-b8i"/><path class="c6en_42bj"/>`,
		"fallback": "pixel:business",
	});
}

export default Component;
