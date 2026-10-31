import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq0tvgbdb.css';
import '../../css/k/k4bqlm3fz.css';
import '../../css/b/b8jgp1b3z.css';
import '../../css/e/eh6tksbbx.css';
import '../../css/m/moge_sejt.css';
import '../../css/g/gpv0tdbvf.css';
import '../../css/x/x6_3xiucy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq0tvgbdb"/><path class="k4bqlm3fz"/><path class="b8jgp1b3z"/><path class="eh6tksbbx"/><path class="moge_sejt"/><path class="gpv0tdbvf"/><path class="x6_3xiucy"/>`,
		"fallback": "tabler-flags:grenada",
	});
}

export default Component;
