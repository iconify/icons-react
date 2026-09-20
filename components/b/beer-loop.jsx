import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/g/g_xo4m.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/t/tr-g4nv7i.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZtvrVczU"><path class="c5xdmn g_xo4m"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGZtvrVczU)" class="botfzx"/><path class="c5xdmn yx0aom"/>`,
		"fallback": "line-md:beer-loop",
	});
}

export default Component;
