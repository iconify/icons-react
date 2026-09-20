import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7jai.css';
import '../../css/r/r0hzzw.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/l/lb6slu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr-g4nb9z.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW5v3KGPB"><path class="le7jai"/><path class="r0hzzw"/></mask></defs><path mask="url(#SVGW5v3KGPB)" class="lsejuv ydovum"/><circle class="lb6slu ydovum"/>`,
		"fallback": "line-md:compass-filled",
	});
}

export default Component;
