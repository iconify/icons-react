import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rie_5cbwa.css';
import '../../css/b/bxrswi4vq.css';
import '../../css/q/q-irv3b_w.css';
import '../../css/o/oc7mgouay.css';
import '../../css/w/wwgi1acvp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rie_5cbwa"/><path class="bxrswi4vq"/><path class="q-irv3b_w"/><path class="oc7mgouay"/><path class="wwgi1acvp"/>`,
		"fallback": "streamline-pixel:health-brain-2",
	});
}

export default Component;
