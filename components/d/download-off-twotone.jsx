import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0bjes.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/t/tp2lab.css';
import '../../css/v/vtdnol.css';
import '../../css/b/botfzx.css';
import '../../css/h/hzf00h.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwLLcweNu"><path class="b0bjes t5pxry zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="t5pxry tp2lab vtdnol y4wbml"/></mask></defs><path mask="url(#SVGwLLcweNu)" class="botfzx"/><path class="hzf00h t5pxry tp2lab y4wbml"/>`,
		"fallback": "line-md:download-off-twotone",
	});
}

export default Component;
