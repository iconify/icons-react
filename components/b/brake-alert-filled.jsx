import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/y/yxrkxv.css';
import '../../css/q/q2zedg.css';
import '../../css/q/qc_pkd.css';
import '../../css/y/y4wbml.css';
import '../../css/x/xao-rs.css';
import '../../css/b/botfzx.css';
import '../../css/g/g_t0ty.css';
import '../../css/s/s8e22g.css';
import '../../css/v/v562ka.css';
import '../../css/s/so-from-54.css';
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
		"content": `<defs><mask id="SVGY2srPdiq"><path class="t5pxry yxrkxv"/><path class="q2zedg qc_pkd t5pxry y4wbml"/><path class="qc_pkd t5pxry xao-rs y4wbml"/></mask></defs><path mask="url(#SVGY2srPdiq)" class="botfzx"/><path class="g_t0ty s8e22g t5pxry y4wbml"/><path class="s8e22g t5pxry v562ka y4wbml"/>`,
		"fallback": "line-md:brake-alert-filled",
	});
}

export default Component;
