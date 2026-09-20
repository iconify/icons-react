import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/o7eo46bvq.css';
import '../../css/i/ily35eomz.css';
import '../../css/o/o9rww6bob.css';
import '../../css/z/z4v7yf9lp.css';
import '../../css/u/ulw343a8k.css';
import '../../css/x/x5v--_bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="o7eo46bvq"/><path class="ily35eomz"/><path class="o9rww6bob"/><path class="z4v7yf9lp"/><path class="ulw343a8k"/><path class="x5v--_bic"/></g>`,
		"fallback": "streamline-sharp-color:email-attachment-image",
	});
}

export default Component;
