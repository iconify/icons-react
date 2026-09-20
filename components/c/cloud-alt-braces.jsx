import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrlnzc.css';
import '../../css/y/ycz98z.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/t/tr-143p1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXBl9cdqY"><path class="jrlnzc"/><path class="ycz98z"/></mask></defs><path mask="url(#SVGXBl9cdqY)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-braces",
	});
}

export default Component;
