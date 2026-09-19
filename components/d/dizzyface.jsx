import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vglgb9b7f.css';
import '../../css/o/ocb79kshn.css';
import '../../css/x/xutwwqb0x.css';
import '../../css/r/rcn56qi3j.css';
import '../../css/u/uj1cm2byu.css';
import '../../css/o/o9q3po3jq.css';
import '../../css/p/pnzmdacjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vglgb9b7f"/><path class="ocb79kshn"/><path class="xutwwqb0x"/><path class="rcn56qi3j"/><path class="uj1cm2byu"/><path class="o9q3po3jq"/><path class="pnzmdacjg"/>`,
		"fallback": "fxemoji:dizzyface",
	});
}

export default Component;
