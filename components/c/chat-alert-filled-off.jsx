import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so5a6b.css';
import '../../css/t/t5pxry.css';
import '../../css/q/qc_pkd.css';
import '../../css/w/wi9aei.css';
import '../../css/y/y4wbml.css';
import '../../css/w/wb185e.css';
import '../../css/n/nsraqz.css';
import '../../css/p/p9atcd.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-70.css';
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
		"content": `<defs><mask id="SVGEblU5d4H"><path class="so5a6b t5pxry"/><path class="qc_pkd t5pxry wi9aei y4wbml"/><path class="qc_pkd t5pxry wb185e y4wbml"/><path class="nsraqz p9atcd qc_pkd t5pxry y4wbml"/></mask></defs><path mask="url(#SVGEblU5d4H)" class="botfzx"/><path class="gd_4-q p9atcd t5pxry y4wbml"/>`,
		"fallback": "line-md:chat-alert-filled-off",
	});
}

export default Component;
