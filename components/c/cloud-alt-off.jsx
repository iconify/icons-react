import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/x/x7iyhq.css';
import '../../css/o/oxx-om.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7fxiFc8c"><path class="c5xdmn x7iyhq"/><path class="c5xdmn oxx-om t-ne3j"/></mask></defs><path mask="url(#SVG7fxiFc8c)" class="botfzx"/><path class="c5xdmn gd_4-q t-ne3j"/>`,
		"fallback": "line-md:cloud-alt-off",
	});
}

export default Component;
