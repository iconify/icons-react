import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptrq_tz8w.css';
import '../../css/w/wr4q_kbqj.css';
import '../../css/i/i1bwf0b1n.css';
import '../../css/l/lqtpzkbni.css';
import '../../css/i/i-w8sug7o.css';
import '../../css/n/n5iq1sboa.css';
import '../../css/q/qla3k_btd.css';
import '../../css/o/okg95lb7p.css';
import '../../css/v/vgcfiigkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG6A0fYdOi" cx="49.1" cy="58.3" r="96.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="ptrq_tz8w"/><stop offset=".85" class="wr4q_kbqj"/><stop offset="1" class="wr4q_kbqj"/></radialGradient><radialGradient id="SVG76k9qdxd" cx="109.6" cy="57.5" r="99.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="ptrq_tz8w"/><stop offset=".85" class="wr4q_kbqj"/><stop offset="1" class="wr4q_kbqj"/></radialGradient></defs><path class="i1bwf0b1n"/><path fill="url(#SVG6A0fYdOi)" transform="matrix(2.8 0 0 2.8 -36.647 -19.577)" class="lqtpzkbni"/><path class="i-w8sug7o"/><path class="n5iq1sboa"/><path fill="url(#SVG76k9qdxd)" transform="matrix(2.8 0 0 2.8 -36.647 -19.577)" class="qla3k_btd"/><path class="okg95lb7p"/><path class="vgcfiigkf"/>`,
		"fallback": "xero-emoji:exclamation-question-mark",
	});
}

export default Component;
