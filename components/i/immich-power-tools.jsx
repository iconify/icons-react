import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orbe74awu.css';
import '../../css/z/zz060_b7p.css';
import '../../css/s/s2jhfm7pd.css';
import '../../css/o/oisr9pb9k.css';
import '../../css/z/zt_suac9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orbe74awu"/><path class="zz060_b7p"/><path class="s2jhfm7pd"/><path class="oisr9pb9k"/><path class="zt_suac9k"/>`,
		"fallback": "selfhst:immich-power-tools",
	});
}

export default Component;
