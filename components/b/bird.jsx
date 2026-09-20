import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_edvobtp.css';
import '../../css/r/r4lpi6bpe.css';
import '../../css/s/sl-2nx90w.css';
import '../../css/s/s-mu1_hdh.css';
import '../../css/o/o9qv2p9ve.css';
import '../../css/t/tnv4y9bdv.css';
import '../../css/k/kyp39dfkg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_edvobtp"/><path class="r4lpi6bpe"/><path class="sl-2nx90w"/><path class="s-mu1_hdh"/><path class="o9qv2p9ve"/><path class="tnv4y9bdv"/><path class="kyp39dfkg"/>`,
		"fallback": "openmoji:bird",
	});
}

export default Component;
