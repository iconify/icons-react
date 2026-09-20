import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwuetm4pl.css';
import '../../css/c/cyucoabfv.css';
import '../../css/t/tsi3labku.css';
import '../../css/g/gnqkz_bnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwuetm4pl"/><path class="cyucoabfv"/><path class="tsi3labku"/><path class="gnqkz_bnv"/>`,
		"fallback": "selfhst:dosvault-dark",
	});
}

export default Component;
