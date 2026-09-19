import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6yrczefu.css';
import '../../css/r/r-t_bpbcz.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6yrczefu"/><path clip-rule="evenodd" class="r-t_bpbcz"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:adobe-illustrator-outline",
	});
}

export default Component;
