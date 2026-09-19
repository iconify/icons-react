import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/axvwh0bez.css';
import '../../css/c/cczcib67m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEDpbBe5z"><g class="v3_i3wktz"><path class="axvwh0bez"/><path clip-rule="evenodd" class="cczcib67m"/></g></mask></defs><path mask="url(#SVGEDpbBe5z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:book",
	});
}

export default Component;
