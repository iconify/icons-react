import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxsk5z.css';
import '../../css/a/a-_6cg.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-81eu9o.css';
import '../../css/t/tr-143p1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOtnCrdZc"><path class="fxsk5z"/><path class="a-_6cg"/></mask></defs><path mask="url(#SVGOtnCrdZc)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-braces-loop",
	});
}

export default Component;
