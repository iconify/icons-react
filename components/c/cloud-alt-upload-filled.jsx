import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrlnzc.css';
import '../../css/c/ciufjk.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-_cmxkd.css';
import '../../css/d/d-23sxtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxd71Ichr"><path class="jrlnzc"/><path class="ciufjk"/></mask></defs><path mask="url(#SVGxd71Ichr)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-upload-filled",
	});
}

export default Component;
