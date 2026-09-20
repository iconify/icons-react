import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxsk5z.css';
import '../../css/o/o4bzoz.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-_cmxkd.css';
import '../../css/d/d-23sxtr.css';
import '../../css/d/d-2ce4be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG01ZtjcLZ"><path class="fxsk5z"/><path class="o4bzoz"/></mask></defs><path mask="url(#SVG01ZtjcLZ)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-upload-filled-loop",
	});
}

export default Component;
