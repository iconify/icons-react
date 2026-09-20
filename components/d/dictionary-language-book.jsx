import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbeo_v74l.css';
import '../../css/i/i3aplqbmt.css';
import '../../css/t/tr0jq53cg.css';
import '../../css/c/c4il1abgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbeo_v74l"/><path class="i3aplqbmt"/><path class="tr0jq53cg"/><path class="c4il1abgs"/></g>`,
		"fallback": "streamline-color:dictionary-language-book",
	});
}

export default Component;
