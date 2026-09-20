import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/z70o0j.css';
import '../../css/b/b9qm4w.css';
import '../../css/l/lyzt0g.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJJgTOcpz"><path class="g26hbu t5pxry z70o0j"/><path class="b9qm4w g26hbu"/><path class="lyzt0g oxx-om t5pxry"/></mask></defs><path mask="url(#SVGJJgTOcpz)" class="botfzx"/><path class="gd_4-q lyzt0g t5pxry"/>`,
		"fallback": "line-md:chat-round-filled-off",
	});
}

export default Component;
