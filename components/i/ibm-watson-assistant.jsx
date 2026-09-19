import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jck0vfbad.css';
import '../../css/u/u2p_6-b8n.css';
import '../../css/t/t74-6o1oe.css';
import '../../css/i/iuwke7bvt.css';
import '../../css/c/cq01zfbxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jck0vfbad"/><circle class="u2p_6-b8n"/><circle class="t74-6o1oe"/><circle class="iuwke7bvt"/><path class="cq01zfbxb"/>`,
		"fallback": "carbon:ibm-watson-assistant",
	});
}

export default Component;
