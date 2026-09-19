import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wf620f_rf.css';
import '../../css/m/mtt_6t4wg.css';
import '../../css/i/i-8315s3v.css';
import '../../css/d/d4survb_k.css';
import '../../css/i/i1sxi3zrp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQiWLBe6X"><g class="ft5dv1b6b"><path class="wf620f_rf"/><path class="mtt_6t4wg"/><path class="i-8315s3v"/><path class="d4survb_k"/><path class="i1sxi3zrp"/></g></mask></defs><path mask="url(#SVGQiWLBe6X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:headset-one",
	});
}

export default Component;
