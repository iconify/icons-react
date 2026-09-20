import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/z/z-xnyl.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/t/tp2lab.css';
import '../../css/u/uouk4x.css';
import '../../css/b/botfzx.css';
import '../../css/e/e3-och.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYPCJgbCJ"><path class="t5pxry z-xnyl zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="t5pxry tp2lab uouk4x y4wbml"/></mask></defs><path mask="url(#SVGYPCJgbCJ)" class="botfzx"/><path class="e3-och t5pxry tp2lab y4wbml"/>`,
		"fallback": "line-md:download-off",
	});
}

export default Component;
