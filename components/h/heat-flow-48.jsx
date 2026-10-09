import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuvrmqbix.css';
import '../../css/z/z2tgbdc9c.css';
import '../../css/q/q3_ql_27a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuvrmqbix"/><path class="z2tgbdc9c"/><path class="q3_ql_27a"/>`,
		"fallback": "energy-icons:heat-flow-48",
	});
}

export default Component;
