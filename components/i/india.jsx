import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ephwb-o.css';
import '../../css/p/peudg--ud.css';
import '../../css/w/wx9y-fb7s.css';
import '../../css/u/u69-q7bww.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ephwb-o"/><path class="peudg--ud"/><path class="wx9y-fb7s"/><path class="u69-q7bww"/>`,
		"fallback": "tabler-flags:india",
	});
}

export default Component;
