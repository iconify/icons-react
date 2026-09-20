import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a20rpk27t.css';
import '../../css/z/z-hpywrvi.css';
import '../../css/u/u0eu7acuy.css';
import '../../css/s/sehpe0btu.css';
import '../../css/i/i6yn_gbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a20rpk27t"/><path class="z-hpywrvi"/><path class="u0eu7acuy"/><path class="sehpe0btu"/><path class="i6yn_gbzm"/></g>`,
		"fallback": "streamline-ultimate-color:email-action-search-1",
	});
}

export default Component;
