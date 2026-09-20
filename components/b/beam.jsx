import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp29u2ycf.css';
import '../../css/c/ctrc2_lfv.css';
import '../../css/t/tt80nldiy.css';
import '../../css/r/rzq2cgb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp29u2ycf"/><path class="ctrc2_lfv"/><path class="tt80nldiy"/><path class="rzq2cgb3n"/>`,
		"fallback": "token:beam",
	});
}

export default Component;
