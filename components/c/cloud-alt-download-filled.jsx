import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrlnzc.css';
import '../../css/y/ymaqmw.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-1mdu6d.css';
import '../../css/d/d-360tni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcoProd2D"><path class="jrlnzc"/><path class="ymaqmw"/></mask></defs><path mask="url(#SVGcoProd2D)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-download-filled",
	});
}

export default Component;
