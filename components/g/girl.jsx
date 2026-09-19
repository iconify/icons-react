import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k--9yge4r.css';
import '../../css/p/pzeg5jbfa.css';
import '../../css/p/p3rsswh-b.css';
import '../../css/o/olx67_h7n.css';
import '../../css/i/i2le73bpe.css';
import '../../css/a/akakqybsy.css';
import '../../css/o/oq02q7uee.css';
import '../../css/u/umrtsn0au.css';
import '../../css/w/woct31jik.css';
import '../../css/i/i5ojcf2ym.css';
import '../../css/c/cp87srbxt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k--9yge4r"/><path clip-rule="evenodd" class="pzeg5jbfa"/><circle clip-rule="evenodd" class="p3rsswh-b"/><circle clip-rule="evenodd" class="olx67_h7n"/><path clip-rule="evenodd" class="i2le73bpe"/><path clip-rule="evenodd" class="akakqybsy"/><path class="oq02q7uee"/><path class="umrtsn0au"/><path class="woct31jik"/><path class="i5ojcf2ym"/><path class="cp87srbxt"/>`,
		"fallback": "flat-ui:girl",
	});
}

export default Component;
