import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j217dw.css';
import '../../css/r/r1menc.css';
import '../../css/z/zxndow.css';
import '../../css/t/taf2xz.css';
import '../../css/x/x82j5v.css';
import '../../css/a/ainywl.css';
import '../../css/d/dizlzg.css';
import '../../css/w/w_o-7b.css';
import '../../css/m/mdiuwa.css';
import '../../css/n/nvw5hd.css';
import '../../css/l/lejxcg.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/m/mr6-qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD7kvoeQx"><path class="j217dw r1menc zxndow"/><path class="r1menc taf2xz x82j5v zxndow"/><path class="ainywl dizlzg r1menc"/><path class="r1menc taf2xz w_o-7b zxndow"/><path class="ainywl mdiuwa r1menc"/><path class="mdiuwa r1menc taf2xz zxndow"/><path class="nvw5hd r1menc taf2xz zxndow"/><circle class="lejxcg"/></mask></defs><path mask="url(#SVGD7kvoeQx)" class="lsejuv ydovum"/><circle class="mr6-qm ydovum"/>`,
		"fallback": "line-md:iconify2-static",
	});
}

export default Component;
