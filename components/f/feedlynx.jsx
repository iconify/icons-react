import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbkmeebpe.css';
import '../../css/f/fr-p43erz.css';
import '../../css/r/rn_zfz0lg.css';
import '../../css/h/hebbckb1t.css';
import '../../css/l/l85rmcbgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbkmeebpe"/><path class="fr-p43erz"/><path class="rn_zfz0lg"/><path class="hebbckb1t"/><path class="l85rmcbgo"/>`,
		"fallback": "selfhst:feedlynx",
	});
}

export default Component;
